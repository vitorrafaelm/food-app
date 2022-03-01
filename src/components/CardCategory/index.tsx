import { CardContainer, CategoryButton, CategoryTitle } from "./styles";

import ArrowRightBlack from "../../assets/arrow-right.svg";
import ArrowRightWhite from "../../assets/arrow-right2.svg";
import { ReactNode } from "react";

interface CardCategoryProps {
  title: string; 
  image: ReactNode; 
  id: string; 
  active: string; 
  setActive(id: string): void;
}

export function CardCategory({ title, image, id, active, setActive}: CardCategoryProps): JSX.Element {
  return (
    <CardContainer isActive={ id === active ? true : false} onPress={() => setActive(id)}>
      {image}
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryButton isActive={ id === active ? true : false}>
        {
          id === active ? <ArrowRightBlack /> :  <ArrowRightWhite />
        }
      </CategoryButton>
    </CardContainer>
  );
}
