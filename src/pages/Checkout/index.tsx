import { Form } from "../../components/Form";
import { CardFlat } from "./components/CardFlat";
import {
  CardContainer,
  CardOption,
  ConfirmButton,
  Container,
  FormContainer,
  FormSection,
  PaymentOptionCards,
  PaymentOptions,
  PaymentOptionTitle,
  Summary,
} from "./style";

import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

export function Checkout() {
  return (
    <Container>
      <FormContainer>
        <h2>Complete seu pedido</h2>
        <FormSection>
          <Form />
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
      </FormContainer>

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

          <ConfirmButton>
            <p>CONFIRMAR PEDIDO</p>
          </ConfirmButton>
        </CardContainer>
      </div>
    </Container>
  );
}
