//This is for testing Tab Navigation from React Navigation

import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Categories from "../components/mainPage/Categories";
import Transactions from "../components/mainPageTransactions";

const EmissionTabNavigation = createMaterialTopTabNavigator(
  {
    Categories: Categories,
    Transactions: Transactions
  },
  {
    tabBarOptions: {
      activeTintColor: "#191919",
      inactiveTintColor: "#97A5BC",
      style: {
        backgroundColor: "none"
      },
      labelStyle: {
        textAlign: "center",
        textTransform: "capitalize",
        fontSize: 14
      },
      indicatorStyle: {
        borderBottomColor: "#191919",
        borderBottomWidth: 4
      },
      allowFontScaling: true
    }
  }
);

export default EmissionTabNavigation;
