import { StackNavigator } from "react-navigation";

// components
import App from "./src/App";
import Second from "./src/Second";

const routeConfigs = {
  AppRoute: {
    screen: App,
    navigationOptions: {
      title: "App"
      //header: null
    }
  },
  SecondRoute: {
    screen: Second,
    navigationOptions: {
      title: "Second"
    }
  }
};

const stackNavigationConfig = {
  initialRouteName: "AppRoute"
  //mode: "modal",
  //headerMode: "none"
};

export default StackNavigator(routeConfigs, stackNavigationConfig);
