import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../Screens/Home";
import Profile from "../Screens/Profile";

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: Home,
      Profile: Profile
    },
    {
      initialRouteName: "Profile",
      headerMode: "none"
    }
  )
);

export default AppContainer;
