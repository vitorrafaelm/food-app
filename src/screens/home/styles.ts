import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px 20px 0px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.ScrollView``; 

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 32px;
`;

export const Menu = styled.Image`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const MenuButton = styled.TouchableOpacity``;

export const SubHeader = styled.View`
  margin-top: 32px;
`;

export const FoodText = styled.Text`
  font-family: "Montserrat_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.text_dark}; ;
`;

export const FoodTextDelivery = styled.Text`
  font-family: "Montserrat_700Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const InputContainer = styled.View`
  margin-top: 16px;
`;

export const CategorySection = styled.View`
  margin-top: 32px;
`;

export const CategorySectionTitle = styled.Text`
  width: 91px;
  height: 20px;

  font-family: "Montserrat_700Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const CategoryItemContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 16px;
`;

export const MenuSection = styled.View`
  flex: 1;
  margin-top: 32px;
`; 

export const MenuSectionTitle = styled.Text`
  width: 91px;
  height: 20px;

  font-family: "Montserrat_600SemiBold";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const MenuList = styled.ScrollView`
  
  margin-top: 16px;
`;
