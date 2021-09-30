import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Repos from '../screens/Repos'
import { theme } from '../global/styles/theme'

const { Navigator, Screen } =  createStackNavigator()

const Route = () => {
    return (
        <Navigator
            screenOptions={{
                presentation: 'modal',
                cardStyle: { backgroundColor: theme.colors.gray },
                headerShown: false,
            }}
        >
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Repos"
                component={Repos}
            />
        </Navigator>
    )
}

export default Route;