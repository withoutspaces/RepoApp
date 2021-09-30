import React from "react";
import { Poppins_700Bold, Poppins_400Regular, Poppins_300Light } from '@expo-google-fonts/poppins';
import { Background } from "./src/Components/Background";
import { StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import { Routes } from "./src/routes";


import AppLoading from "expo-app-loading";


export default function App(){

    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_700Bold
    })

    if(!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <Background>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
                <Routes />
        </Background>
    )
}
