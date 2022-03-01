import styled from "styled-components/native";

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100px;
  height: 80px;

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  margin-right: 16px;
`;

export const IngredientImage = styled.Image`
  width: 80px;
  height: 50px;
`; 
