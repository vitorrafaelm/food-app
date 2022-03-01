import { InputContainer, InputText } from "./styles";

import Loupe from '../../assets/loupe.svg';

export function Input(): JSX.Element {
  return (
    <InputContainer>
      <InputText placeholder="Search" />
      <Loupe />
    </InputContainer>
  );
}
