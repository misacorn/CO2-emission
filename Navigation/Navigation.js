import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../Screens/Main";
import Profile from "../Screens/Profile";
import Tips from "../Screens/Tips";

const Navigation = createStackNavigator(
  {
    Main: Main,
    Profile: Profile,
    Tips: Tips
  },
  {
    initialRouteName: "Tips",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(Navigation);

export default AppContainer;
