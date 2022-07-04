import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login";
import BrowsePodcast from "./screens/BrowsePodcast";

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none" mode="model">
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="BrowsePodcast" component={BrowsePodcast} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
