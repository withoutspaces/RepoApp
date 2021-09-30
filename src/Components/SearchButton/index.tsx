import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './style'

type Props = RectButtonProps & {
    title: string
}


export function SearchButton({ title, ...rest } : Props) {
    return (
        <View>
            <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                { title }
            </Text>
            </RectButton>           
        </View> 
    )
}