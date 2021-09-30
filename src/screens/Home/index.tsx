import React, { useState } from "react";

import { View, Keyboard, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SearchButton } from "../../Components/SearchButton";
import { SearchBar } from "react-native-elements";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import IGithubRepo from "../../services/IGitHubRepos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../services/client';



const Home: React.FC = () => {
    const [user, setUser] = useState('')
    const [error, setError] = useState(false)
    const [repositories, setRepositories] = useState<IGithubRepo[]>([])

    function handleClearSearch() {
        setError(false)
        setUser('')
        setRepositories([])
    }
    
    function handleChangeSearch(textFromEvent: string) {
        setUser(textFromEvent)
    }

    const navigation = useNavigation()

    function handleGoToReposScreen() {
        navigation.navigate('Repos')
    }
    
    async function storeUser() {
        try {
            await AsyncStorage.setItem("user", user)
            await AsyncStorage.setItem("repos", JSON.stringify(repositories))
        
        } catch (error) {
            console.log(error)
        }

    }

    async function handleSearch() {
        api
        .get(`${user}/repos`)
        .then((response) => {
            setRepositories(response.data)
            storeUser()
            if(repositories !== null) {    //funciona? 
                handleGoToReposScreen()
                setError(false)
            }
        })
        .catch((err) => {
            console.log("Opa! Não consegui achar esse usuário. " + err)
            setError(true)
        })

        Keyboard.dismiss()
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <SearchBar
                    onChangeText={handleChangeSearch}
                    onClear={handleClearSearch}
                    placeholder="Digite o username do GitHub" 
                    autoCapitalize="none"
                    lightTheme={true}
                    value={user}
                    round={true}
                    containerStyle={{
                        backgroundColor: theme.colors.gray,
                        borderBottomColor: "transparent",
                        borderTopColor: "transparent",
                      }}
                    inputStyle={{
                        fontFamily: theme.fonts.text300,
                        fontSize: 16,
                    }}
                />
            </View>
            <View style={styles.button}>
                <SearchButton 
                    title="Pesquisar"
                    onPress={handleSearch}
                />
            </View>
            <View>
                <Text style={styles.userNotFound}>
                    { error === true ? 'Opa, que pena!\nUsuário não encontrado.' : ''}
                </Text>
            </View>
        </View>
    )
}

export default Home;
