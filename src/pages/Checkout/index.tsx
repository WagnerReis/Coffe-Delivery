import { Form } from "../../components/Form";
import { CardFlat } from "./components/CardFlat";
import * as zod from "zod";
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

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Informe o estado"),
  paymentMethod: zod.enum(["credit", "debit", "money"], {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>;

export function Checkout() {
  const { createNewOrder } = useCheckout();

  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "",
      paymentMethod: "credit",
    },
  });

  const { handleSubmit, reset } = newCheckoutForm;

  function handleCreateNewCheckoutForm(data: NewCheckoutFormData) {
    const newOrder = {
      coffees: [],
      paymentMethod: data.paymentMethod,
      orderId: "123456",
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

    createNewOrder(newOrder);
    reset();
  }

  return (
    <FormContainer
      onSubmit={handleSubmit(handleCreateNewCheckoutForm)}
      action=""
    >
      <FormCheckout>
        <h2>Complete seu pedido</h2>
        <FormSection>
          <FormProvider {...newCheckoutForm}>
            <Form />
          </FormProvider>
        </FormSection>

        <PaymentOptions>
          <PaymentOptionTitle>
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentOptionTitle>

          <PaymentOptionCards>
            <CardOption isSelected>
              <CreditCard size={16} weight="regular" />
              <p>CARTÃO DE CRÉDITO</p>
            </CardOption>
            <CardOption>
              <Money size={16} weight="regular" />
              <p>CARTÃO DE DÉBITO</p>
            </CardOption>
            <CardOption>
              <Bank size={16} weight="regular" />
              <p>DINHEIRO</p>
            </CardOption>
          </PaymentOptionCards>
        </PaymentOptions>
      </FormCheckout>

      <div>
        <h2>Cafés selecionados</h2>

        <CardContainer>
          <CardFlat />
          <hr />
          <CardFlat />
          <hr />
          <Summary>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </Summary>

          <ConfirmButton type="submit">
            <p>CONFIRMAR PEDIDO</p>
          </ConfirmButton>
        </CardContainer>
      </div>
    </FormContainer>
  );
}
