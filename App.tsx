import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/pages";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
