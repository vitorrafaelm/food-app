import styled from "styled-components/native";

interface ButtonProps {
  width?: number;
  height?: number;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 335px;
  height: 62px;

  background: #f5ca48;
  border-radius: 50px;
`;

export const Text = styled.Text`
  font-family: "Montserrat_700Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;
