import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../screens/Main";
import Profile from "../screens/Profile";
import Tips from "../screens/Tips";

const Navigation = createStackNavigator(
  {
    Main: Main,
    Profile: Profile,
    Tips: Tips
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(Navigation);

export default AppContainer;
