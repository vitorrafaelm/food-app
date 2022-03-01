import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/home";
import { OrderDetail } from '../screens/order_detail'; 

export function AppRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="OrderDetail" component={OrderDetail} />
    </Navigator>
  );
}
