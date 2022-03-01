import { ReactNode } from 'react';
import { Button, Text } from './styles'; 

interface MainButtonProps {
  width?: number; 
  height?: number; 
  title: string; 
  icon: ReactNode; 
}

export function MainButton({ width, height, title, icon }: MainButtonProps): JSX.Element {
  return (
    <Button>
      <Text>
        {title} {"  "} {icon} 
      </Text> 
    </Button>
  )
}