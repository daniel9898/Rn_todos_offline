import React from 'react';
import { createDrawerNavigator } from "react-navigation";
import Sidebar from "../sidebar";
import Routes from "./routes.navigation";

/*Se modifico MainActivity.java para que funciona el deslizamiento del sideBar*/

const Drawer = createDrawerNavigator(Routes ,{
    initialRouteName: "Dashboard",
    contentOptions: {
    	activeTintColor: "#e91e63"
    },
    contentComponent: props => <Sidebar {...props} />
});

export default Drawer;