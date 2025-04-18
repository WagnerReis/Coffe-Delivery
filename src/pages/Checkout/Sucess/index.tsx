import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import illustrantionCheckout from "../../../assets/illustration-checkout.svg";
import {
  OrderInfo,
  SuccessContainer,
  Content,
  SubTitle,
  Icon,
  Item,
  ItemDescription,
} from "./styles";

export function Sucess() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </ItemDescription>
          </Item>
        </OrderInfo>

        <img src={illustrantionCheckout} alt="" />
      </Content>
    </SuccessContainer>
  );
}
