import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../componentes/views/TelaA";
import TelaB from "../componentes/views/TelaB";
import TelaC from "../componentes/views/TelaC";

const Tab = createBottomTabNavigator()

export default props => (

    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'yellow',
            tabBarInactiveTintColor: 'green',
            tabBarShowLabel:true,
            tabBarActiveBackgroundColor: '#999',
            tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold' },
       }} initialRouteName="TelaB">
        <Tab.Screen name="TelaA"
            options={{ title: "Inicio" }} component={TelaA} />
        <Tab.Screen name="TelaB"
            options={{ title: "Meio" }} component={TelaB} />
        <Tab.Screen name="TelaC"
            options={{ title: "Final" }} component={TelaC} />
    </Tab.Navigator>
)