import coffeeIntro from "../../../../assets/coffee-intro.svg";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import {
  BenefitsContainer,
  IntroContainer,
  PrensentationContainer,
  Icon,
  SmallItem,
  LargeItem,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <PrensentationContainer>
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>

        <BenefitsContainer>
          <SmallItem>
            <Icon background="yellowDark">
              <ShoppingCart size={16} weight="fill" />
            </Icon>
            <p>Compra simples e segura</p>
          </SmallItem>
          <LargeItem>
            <Icon background="baseText">
              <Package size={16} weight="fill" />
            </Icon>
            <p>Embalagem mantém o café intacto</p>
          </LargeItem>
          <SmallItem>
            <Icon background="yellow">
              <Timer size={16} weight="fill" />
            </Icon>
            <p>Entrega rápida e rastreada</p>
          </SmallItem>
          <LargeItem>
            <Icon background="purple">
              <Coffee size={16} weight="fill" />
            </Icon>
            <p>O café chega fresquinho até você</p>
          </LargeItem>
        </BenefitsContainer>
      </PrensentationContainer>
      <div>
        <img src={coffeeIntro} alt="" />
      </div>
    </IntroContainer>
  );
}
