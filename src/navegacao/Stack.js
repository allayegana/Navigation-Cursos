import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from "../componentes/views/TelaA";
import TelaB from "../componentes/views/TelaB";
import TelaC from "../componentes/views/TelaC";
import PassoStack from "../componentes/PassoStack";



const stack = createNativeStackNavigator()
export default props => (
    <stack.Navigator initialRouteName="TelaA"
        screenOptions={{ headerShown: true }}>

        <stack.Screen name="TelaA"
            options={{ title: 'informacao inicial ' }}>
            {props => (
                <PassoStack {...props} avancar='TelaB'>
                    <TelaA />
                </PassoStack>
            )}
        </stack.Screen>

        <stack.Screen name="TelaB"
            options={{ title: 'informacao da segundo tela  ' }}>
            {props => (
                <PassoStack {...props} avancar='TelaC' voltar>
                    <TelaB />
                </PassoStack>
            )}
        </stack.Screen>

        <stack.Screen name="TelaC"
            options={{ title: 'informacao da utimo tela ' }}>
            {props => (
                <PassoStack {...props} avancar='TelaA'>
                    <TelaC />
                </PassoStack>
            )}
        </stack.Screen>

    </stack.Navigator>
)