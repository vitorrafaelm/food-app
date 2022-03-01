import styled from "styled-components/native";

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 368px;
  height: 161px;

  background: #ffffff;
  box-shadow: 0px 4px 10px #000000;
  border-radius: 25px;

  margin-bottom: 16px;
`;

export const CardContainerInfo = styled.View`
  display: flex; 
  justify-content: space-between;
  align-items: stretch;
  height: 161px;
`;

export const Classification = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 24px;

  margin-top: 18px;
`;

export const Text = styled.Text`
  margin-left: 8px;
`;

export const OrderInfo = styled.View`
  padding-left: 24px;
`;

export const OrderName = styled.Text``;

export const OrderWeight = styled.Text``;

export const OrderActions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const OrderButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 53px;

  background: #f5ca48;
  border-radius: 25px;

  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
`;

export const OrderRate = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OrderRateText = styled.Text`
  margin-left: 8px;
`;

export const OrderImage = styled.Image``;
