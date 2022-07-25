import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../componentes/views/TelaA";
import TelaB from "../componentes/views/TelaB";
import TelaC from "../componentes/views/TelaC";

const Tab = createBottomTabNavigator()

export default props => (

    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor:'blue',
            tabarBarLabelStyle:{ fontSize:50}
        }} initialRouteName="TelaC">
        <Tab.Screen name="TelaA" component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
)