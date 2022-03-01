import styled from "styled-components/native";

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
`;

export const InputText = styled.TextInput`
  width: 100%;
  max-width: 330px;
  height: 40px;
`;
