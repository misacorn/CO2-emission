import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Tips from "../pages/Tips";

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
