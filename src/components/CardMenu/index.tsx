import {
  CardContainer,
  CardContainerInfo,
  Classification,
  Text,
  OrderInfo,
  OrderName,
  OrderWeight,
  OrderActions,
  OrderButton,
  OrderRate,
  OrderRateText,
  OrderImage,
} from "./styles";

import Crown from "../../assets/crown.svg";
import Star from "../../assets/star.svg";
import Plus from "../../assets/plus.svg";
import Pizza from "../../assets/pizza.png";

interface CardMenuProps {
  navigation: any;
}

export function CardMenu({ navigation }: CardMenuProps): JSX.Element {
  return (
    <CardContainer>
      <CardContainerInfo>
        <Classification>
          <Crown />
          <Text>top of the week</Text>
        </Classification>

        <OrderInfo>
          <OrderName>Primavera Pizza</OrderName>
          <OrderWeight>Weight 540g</OrderWeight>
        </OrderInfo>

        <OrderActions>
          <OrderButton onPress={() => navigation.push("OrderDetail")}>
            <Plus />
          </OrderButton>

          <OrderRate>
            <Star />
            <OrderRateText>5.0</OrderRateText>
          </OrderRate>
        </OrderActions>
      </CardContainerInfo>

      <OrderImage source={Pizza} />
    </CardContainer>
  );
}
