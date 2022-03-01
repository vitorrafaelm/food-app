import { CardContainer, IngredientImage } from './styles'; 

import { ImageSourcePropType, Text } from 'react-native';
import { ReactNode } from 'react';

interface IngredientCardProps {
  ingredienImage: ImageSourcePropType; 
}

export function IngredientCard({ ingredienImage }: IngredientCardProps): JSX.Element {
  return (
    <CardContainer>
      <IngredientImage source={ingredienImage} />
    </CardContainer>
  )
}