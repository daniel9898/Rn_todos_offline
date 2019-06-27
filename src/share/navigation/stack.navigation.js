import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
//import Routes  from "./routes.navigation";
import Drawer from "./drawer.navigation";
import Sidebar from "../sidebar";

const stackNavigator = createStackNavigator({
    //...Routes,
    Drawer: { screen: Drawer }
  }, 
  {
    headerMode: "none",
  	navigationOptions : {
      title: "TITULO"
  }
});

const AppContainer = createAppContainer(stackNavigator);
export default AppContainer;






