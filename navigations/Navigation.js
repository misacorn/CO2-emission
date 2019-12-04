import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

<<<<<<< HEAD:navigations/Navigation.js
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Tips from "../pages/Tips";
=======
import Main from "../screens/Main";
import Profile from "../screens/Profile";
import Tips from "../screens/Tips";
>>>>>>> 8cf5d81e7abd6bdc5416784551dbd4316ae6ad1b:Navigation/Navigation.js

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
