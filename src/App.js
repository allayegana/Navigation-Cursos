import React from "react";
import { SafeAreaView, Text } from "react-native";
import TelaA from "./componentes/views/TelaA";
import TelaB from "./componentes/views/TelaB";
import TelaC from "./componentes/views/TelaC";

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <TelaA />
        <TelaB />
        <TelaC />
    </SafeAreaView>
)