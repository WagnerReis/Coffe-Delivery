import { MapPinLine } from "phosphor-react";
import { FormAddress, FormRow, Title } from "./styles";
import { Input } from "../Input";

export function Form() {
  return (
    <div>
      <Title>
        <MapPinLine size={22} />
        <div className="icon icon-location">
          <span>Endereço de Entrega</span>
          <p className="section-description">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </Title>

      <FormAddress>
        <div className="form-group">
          <Input size="medium" placeholder="CEP" />
        </div>

        <div className="form-group">
          <Input size="large" placeholder="Rua" />
        </div>

        <FormRow>
          <div>
            <Input size="medium" placeholder="Número" />
          </div>
          <div>
            <Input size="large" placeholder="Complemento" optional />
          </div>
        </FormRow>

        <FormRow>
          <div>
            <Input size="medium" placeholder="Bairro" />
          </div>
          <div>
            <Input size="mediumXs" placeholder="Cidade" />
          </div>
          <div>
            <Input size="small" placeholder="UF" />
          </div>
        </FormRow>
      </FormAddress>
    </div>
  );
}
