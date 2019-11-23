import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../Screens/Home";
import Profile from "../Screens/Profile";

const Navigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "Home"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: "Profile"
      }
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(Navigation);

export default AppContainer;
