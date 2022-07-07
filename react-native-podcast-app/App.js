import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login";
import BrowsePodcast from "./screens/BrowsePodcast";
import PodcastScreen from "./screens/PodcastScreen";

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none" mode="model">
        <MainStack.Screen name="BrowsePodcast" component={BrowsePodcast} />
        <MainStack.Screen name="PodcastScreen" component={PodcastScreen} />
        <MainStack.Screen name="Login" component={Login} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
