import React, { useState } from "react";
import { useTheme } from "styled-components";

import ProfilePicture from "../../assets/profile.png";
import MenuSVG from "../../assets/menu.svg";

import { SafeAreaView } from "react-native-safe-area-context";
import PizzaIcon from "../../assets/pizza-icon.svg";
import SeafoodIcon from "../../assets/shrimp-icon.svg";
import SodaIcon from "../../assets/soda-icon.svg";

import {
  Container,
  Header,
  ProfileImage,
  MenuButton,
  SubHeader,
  FoodText,
  FoodTextDelivery,
  InputContainer,
  CategorySection,
  CategoryItemContainer,
  CategorySectionTitle,
  MenuSection,
  MenuSectionTitle,
  MenuList,
  Content,
} from "./styles";

import { Input } from "../../components/Input";
import { CardCategory } from "../../components/CardCategory";
import { CardMenu } from "../../components/CardMenu";

interface HomeProps {
  navigation: any;
}

export function Home({ navigation }: HomeProps) {
  const theme = useTheme();

  const [categoryActive, setCategoryActive] = useState<string>(''); 

  function setCategory(id: string) {
    setCategoryActive(id); 
  }

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <Container>
        <Header>
          <MenuButton onPress={() => console.log("clicou")}>
            <ProfileImage source={ProfilePicture} />
          </MenuButton>

          <MenuButton onPress={() => console.log("clicou")}>
            <MenuSVG />
          </MenuButton>
        </Header>

        <SubHeader>
          <FoodText>Food</FoodText>
          <FoodTextDelivery>Delivery</FoodTextDelivery>
        </SubHeader>

        <InputContainer>
          <Input />
        </InputContainer>

        <Content showsVerticalScrollIndicator={false}>
          <CategorySection>
            <CategorySectionTitle>Categories</CategorySectionTitle>
            <CategoryItemContainer>
              <CardCategory id="1" title="Pizza" image={<PizzaIcon />} active={categoryActive} setActive={setCategory} />
              <CardCategory id="2"  title="Seafood" image={<SeafoodIcon />} active={categoryActive} setActive={setCategory} />
              <CardCategory id="3"  title="Soft Drinks" image={<SodaIcon />} active={categoryActive} setActive={setCategory} />
              <CardCategory id="4"  title="Pizza" image={<PizzaIcon />} active={categoryActive} setActive={setCategory} />
            </CategoryItemContainer>
          </CategorySection>

          <MenuSection>
            <MenuSectionTitle>Popular</MenuSectionTitle>

            <MenuList>
              <CardMenu navigation={navigation} />
              <CardMenu navigation={navigation} />
              <CardMenu navigation={navigation} />
            </MenuList>
          </MenuSection>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
