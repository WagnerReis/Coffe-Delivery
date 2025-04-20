import { Form } from "../../components/Form";
import { CardFlat } from "./components/CardFlat";
import * as zod from "zod";
import { v4 as uuidV4 } from "uuid";

import {
  CardContainer,
  CardOption,
  ConfirmButton,
  FormContainer,
  FormCheckout,
  FormSection,
  PaymentOptionCards,
  PaymentOptions,
  PaymentOptionTitle,
  Summary,
} from "./style";

import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckout } from "../../hooks/useCheckout";
import { useState } from "react";
import { Error } from "../../components/Input/styles";
import { calcTotalItens } from "../../utils/calcTotalItens";
import { useNavigate } from "react-router-dom";

const coffeeSchemaValidation = zod.array(
  zod.object({
    id: zod.string(),
    title: zod.string(),
    price: zod.number(),
    quantity: zod.number(),
    image: zod.string(),
  }),
);

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(5, "Informe o CEP"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod
    .number({ invalid_type_error: "Deve ser um número" })
    .min(1, "Informe o número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod
    .string({ invalid_type_error: "Deve ser apenas letras" })
    .min(1, "Informe o estado"),
  paymentMethod: zod.enum(["credit", "debit", "money"], {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
  coffees: coffeeSchemaValidation,
});

type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>;

export function Checkout() {
  const [isSelectedPaymentMethod, setIsSelectedPaymentMethod] = useState("");
  const { coffees, createCheckout, cleanCart } = useCheckout();
  const navigate = useNavigate();

  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: undefined,
      complement: "",
      district: "",
      city: "",
      state: "",
      paymentMethod: undefined,
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    trigger,
  } = newCheckoutForm;

  function handleCreateNewCheckoutForm(data: NewCheckoutFormData) {
    const orderId = uuidV4();
    const newCheckout = {
      coffees: data.coffees,
      paymentMethod: data.paymentMethod,
      orderId,
      address: {
        cep: data.cep,
        street: data.street,
        number: data.number,
        complement: data.complement,
        district: data.district,
        city: data.city,
        state: data.state,
      },
    };

    createCheckout(newCheckout);
    reset();
    handleSetPaymentMethod("");
    cleanCart();
    navigate(`/checkout/${orderId}/success`);
  }

  function handleSetPaymentMethod(method: "credit" | "debit" | "money" | "") {
    if (method === "") {
      setIsSelectedPaymentMethod("");
      return;
    }

    setIsSelectedPaymentMethod(method);
    setValue("paymentMethod", method);

    trigger("paymentMethod");
  }

  const deliveryPrice: number = 3.5;

  const totalItens = calcTotalItens(coffees);
  const totalOrder = totalItens + deliveryPrice;

  return (
    <FormContainer
      onSubmit={handleSubmit(handleCreateNewCheckoutForm)}
      action=""
    >
      <FormCheckout>
        <h2>Complete seu pedido</h2>

        <FormProvider {...newCheckoutForm}>
          <FormSection>
            <Form />
          </FormSection>

          <PaymentOptions>
            <PaymentOptionTitle>
              <CurrencyDollar size={22} />
              <div>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentOptionTitle>

            <PaymentOptionCards>
              <CardOption
                type="button"
                isSelected={isSelectedPaymentMethod === "credit"}
                onClick={() => handleSetPaymentMethod("credit")}
              >
                <CreditCard size={16} weight="regular" />
                <p>CARTÃO DE CRÉDITO</p>
              </CardOption>
              <CardOption
                type="button"
                isSelected={isSelectedPaymentMethod === "debit"}
                onClick={() => handleSetPaymentMethod("debit")}
              >
                <Money size={16} weight="regular" />
                <p>CARTÃO DE DÉBITO</p>
              </CardOption>
              <CardOption
                type="button"
                isSelected={isSelectedPaymentMethod === "money"}
                onClick={() => handleSetPaymentMethod("money")}
              >
                <Bank size={16} weight="regular" />
                <p>DINHEIRO</p>
              </CardOption>
            </PaymentOptionCards>
            {errors.paymentMethod && (
              <Error>{errors.paymentMethod.message}</Error>
            )}
          </PaymentOptions>
        </FormProvider>
      </FormCheckout>

      <div>
        <h2>Cafés selecionados</h2>

        <CardContainer>
          {coffees.length === 0 ? (
            <p>Nenhum café selecionado</p>
          ) : (
            coffees.map((coffee) => {
              setValue("coffees", [coffee]);
              return (
                <div key={coffee.id}>
                  <CardFlat key={coffee.id} coffee={coffee} />
                  <hr />
                </div>
              );
            })
          )}
          {coffees.length > 0 && (
            <>
              <Summary>
                <div>
                  <p>Total de itens</p>
                  <p>R$ {totalItens.toFixed(2)}</p>
                </div>
                <div>
                  <p>Entrega</p>
                  <p>R$ 3,50</p>
                </div>
                <div>
                  <p>Total</p>
                  <p>R$ {totalOrder.toFixed(2)}</p>
                </div>
              </Summary>

              {/* <NavLink to={`/checkout/${orderId}/success`}> */}
              <ConfirmButton type="submit">
                <p>CONFIRMAR PEDIDO</p>
              </ConfirmButton>
              {/* </NavLink> */}
            </>
          )}
        </CardContainer>
      </div>
    </FormContainer>
  );
}
