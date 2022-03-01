import styled from "styled-components/native";

interface ButtonFavorite {
  isFavorite: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};

  width: 100%;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 20px 0px 20px;
`;

export const Menu = styled.Image`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const MenuButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-style: solid;
  border-color: #cdcdcd;
  border-radius: 10px;
`;

export const GoBackImage = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 32px;
`;

export const FavotireButton = styled.TouchableOpacity<ButtonFavorite>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${({ isFavorite }) => isFavorite === true ? '#f5ca48' : 'white' };

  ${({isFavorite}) => !isFavorite ? `
    border-width: 2px;
    border-style: solid;
    border-color: #cdcdcd;
    border-radius: 10px;
  ` : ``}

  border-radius: 10px;
`;

export const SubHeader = styled.View`
  padding: 24px 20px 0px 20px;
`;

export const FoodName = styled.Text`
  font-family: "Montserrat_700Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const OrderPrice = styled.Text`
  font-family: "Montserrat_700Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #e4723c;

  margin-top: 16px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 24px 0px 0px 20px;
`;

export const OrderInfomations = styled.View``;

export const OrderInfoTextContainer = styled.View`
  margin-bottom: 16px;
`;

export const OrderInfomationsTitle = styled.Text`
  font-family: "Montserrat_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #cdcdcd;
`;

export const OrderInformationInfo = styled.Text`
  font-family: "Montserrat_600SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #000000;
`;

export const OrderInformationImage = styled.Image`
  width: 260px;
  height: 176px;
`;

export const IngredientsSection = styled.View`
  padding: 24px 20px 0px 20px; ;
`;

export const IngredientSectionTitle = styled.Text`
  font-family: "Montserrat_700Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
`;

export const IngredientsContainer = styled.ScrollView`
  margin-top: 12px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 32px;
`;
