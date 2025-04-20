import { MapPinLine } from "phosphor-react";
import { FormAddress, FormRow, Title } from "./styles";
import { Input } from "../Input";

export function Form() {
  return (
    <div>
      <Title>
        <MapPinLine size={22} />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Title>

      <FormAddress>
        <div>
          <Input name="cep" size="medium" placeholder="CEP" />
        </div>

        <div>
          <Input name="street" size="large" placeholder="Rua" />
        </div>

        <FormRow>
          <div>
            <Input name="number" size="medium" placeholder="Número" />
          </div>
          <div>
            <Input name="complement" size="large" placeholder="Complemento" />
          </div>
        </FormRow>

        <FormRow>
          <div>
            <Input name="district" size="medium" placeholder="Bairro" />
          </div>
          <div>
            <Input name="city" size="mediumXs" placeholder="Cidade" />
          </div>
          <div>
            <Input name="state" size="small" placeholder="UF" />
          </div>
        </FormRow>
      </FormAddress>
    </div>
  );
}
