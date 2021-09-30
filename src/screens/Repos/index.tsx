import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RepositoriesList from '../../Components/Repositories List';
//import ProfileBox from '../../Components/ProfileBox';
import IGithubRepo from '../../services/IGitHubRepos';



const Repos = () => {
    const [repositories, setRepositories] = useState<IGithubRepo[]>([])
    const [userName, setUserName] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        getUser()
    },[])
        
    async function getUser() {
        try {
            const user = await AsyncStorage.getItem("user")
            const repos = await AsyncStorage.getItem("repos")

            if(repos !== null) {
                const userRepo = JSON.parse(repos)
                setRepositories(userRepo)
                setUserName(user !== null ? user : '') 
        
            }
            console.log(user)
            console.log(repositories)

            AsyncStorage.clear()
            
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.owner}>
                <Text style={styles.ownerText}>
                    Repositórios de {userName}
                </Text>
            </View>
            <ScrollView>
                {
                    repositories.map((repo: IGithubRepo) => {
                        let color = null 
                        return(
                            <RepositoriesList 
                                key={repo.name}
                                title={repo.name}
                                description={repo.description}
                                language={repo.language}
                                isPrivate={repo.private}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>       
    )
}

export default Repos;

