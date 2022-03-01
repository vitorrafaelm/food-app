import styled from "styled-components/native";

interface CardContainerProps {
  isActive: boolean;
}

export const CardContainer = styled.TouchableOpacity<CardContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100px;
  height: 177px;
  background-color: ${({ isActive }) => (isActive ? "#F5CA48" : "#FFFFFF")};
  border-radius: 20px;

  padding-top: 16px;
  margin-right: 13px;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;

export const CategoryTitle = styled.Text`
  font-family: "Montserrat_600SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: ${({ theme }) => theme.colors.text_dark};

  margin-top: 16px;
`;

export const CategoryButton = styled.TouchableOpacity<CardContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;

  background: ${({ theme, isActive }) =>
    isActive ? "#FFFFFF" : theme.colors.secondary};

  border-radius: 32px;

  margin-top: 32px;
`;
