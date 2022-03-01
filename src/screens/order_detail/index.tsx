import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";

import ChevronRight from "../../assets/chevron-right.svg";
import Pizza from "../../assets/pizza.png";
import StarWhite from "../../assets/starWhite.svg";

import { IngredientCard } from "../../components/IngredientCard";

// Ingredients
import Ham from "../../assets/ham.png";
import Garlic from "../../assets/garlic.png";
import Tomato from "../../assets/tomato.png";
import Cheese from "../../assets/cheese.png";

import Arrow from "../../assets/arrow-right.svg";
import Star from "../../assets/star.svg";

import {
  Container,
  Header,
  MenuButton,
  FavotireButton,
  SubHeader,
  FoodName,
  OrderPrice,
  Content,
  OrderInfomations,
  OrderInfoTextContainer,
  OrderInfomationsTitle,
  OrderInformationInfo,
  OrderInformationImage,
  IngredientsSection,
  IngredientSectionTitle,
  IngredientsContainer,
  ButtonContainer,
} from "./styles";
import { MainButton } from "../../components/Button";

interface OrderDetailProps {
  navigation: any;
}

export function OrderDetail({ navigation }: OrderDetailProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  console.log(isFavorite);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <Container>
        <Header>
          <MenuButton onPress={() => navigation.push("Home")}>
            {/* <GoBackImage source={ArrowBack} /> */}
            <ChevronRight width={32} />
          </MenuButton>

          <FavotireButton
            onPress={() => setIsFavorite((prev) => !prev)}
            isFavorite={isFavorite}
          >
            {isFavorite ? <StarWhite /> : <Star />}
          </FavotireButton>
        </Header>

        <SubHeader>
          <FoodName>
            Primavera {"\n"}
            Pizza
          </FoodName>

          <OrderPrice>$5.99</OrderPrice>
        </SubHeader>

        <Content>
          <OrderInfomations>
            <OrderInfoTextContainer>
              <OrderInfomationsTitle>Size</OrderInfomationsTitle>
              <OrderInformationInfo>Medium</OrderInformationInfo>
            </OrderInfoTextContainer>

            <OrderInfoTextContainer>
              <OrderInfomationsTitle>Crust</OrderInfomationsTitle>
              <OrderInformationInfo>Thin Crust</OrderInformationInfo>
            </OrderInfoTextContainer>

            <OrderInfoTextContainer>
              <OrderInfomationsTitle>Delivery in</OrderInfomationsTitle>
              <OrderInformationInfo>30 min</OrderInformationInfo>
            </OrderInfoTextContainer>
          </OrderInfomations>

          <OrderInformationImage source={Pizza} />
        </Content>

        <IngredientsSection>
          <IngredientSectionTitle>Ingredients</IngredientSectionTitle>
          <IngredientsContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <IngredientCard ingredienImage={Ham} />
            <IngredientCard ingredienImage={Garlic} />
            <IngredientCard ingredienImage={Tomato} />
            <IngredientCard ingredienImage={Cheese} />
          </IngredientsContainer>
        </IngredientsSection>

        <ButtonContainer>
          <MainButton title="Place  an order" icon={<Arrow />} />
        </ButtonContainer>
      </Container>
    </SafeAreaView>
  );
}
