import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import illustrantionCheckout from "../../assets/illustration-checkout.svg";
import {
  OrderInfo,
  SuccessContainer,
  Content,
  SubTitle,
  Icon,
  Item,
  ItemDescription,
} from "./styles";
import { useCheckout } from "../../hooks/useCheckout";

export function SucessCheckout() {
  const { address, paymentMethod } = useCheckout();

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
      </div>

      <Content>
        <OrderInfo>
          <Item>
            <Icon background="purple">
              <MapPin size={16} weight="fill" />
            </Icon>
            <ItemDescription>
              <p>
                Entrega em{" "}
                <strong>
                  Rua {formatStreet(address.street)}, {address.number}
                </strong>
              </p>
              <p>
                {address.district} - {address.city}, {address.state}
              </p>
            </ItemDescription>
          </Item>

          <Item>
            <Icon background="yellow">
              <Timer size={16} weight="fill" />
            </Icon>
            <ItemDescription>
              <p>Previsão de Entrega</p>
              <strong>20 min - 30 min</strong>
            </ItemDescription>
          </Item>

          <Item>
            <Icon background="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </Icon>
            <ItemDescription>
              <p>Pagamento na entrega</p>
              <strong>{formatPaymentMethod(paymentMethod)}</strong>
            </ItemDescription>
          </Item>
        </OrderInfo>

        <img src={illustrantionCheckout} alt="" />
      </Content>
    </SuccessContainer>
  );
}

function formatPaymentMethod(paymentMethod: string) {
  switch (paymentMethod) {
    case "credit":
      return "Cartão de Crédito";
    case "debit":
      return "Cartão de Débito";
    case "money":
      return "Dinheiro";
    default:
      return "Método de pagamento não reconhecido";
  }
}

function formatStreet(street: string) {
  const streetAux = street;
  if (streetAux.toLocaleLowerCase().startsWith("rua ")) {
    return street.slice(4).trim();
  }

  return street.trim();
}
