import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

import SearchBar from "react-native-elements";


export function SearchBarComponent() {
    const [search, setSearch] = useState('')
    
    
    function handleChangeText(textFromEvent: string) {
        setSearch(textFromEvent)
    }
    
    
    return (
        <View style={styles.container}>
            <SearchBar 
                style={styles.input}
                onChangeText={handleChangeText}
                value={ search }
                placeholder="Digite o username do GitHub"
            />
        </View>
    )
}