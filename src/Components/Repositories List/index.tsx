import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles'
import { languageColors } from '../../global/styles/languageColors'


type Props = {
    title: string,
    description: string,
    language: string,
    isPrivate: boolean,
}

const RepositoriesList = ({ title, description, language, isPrivate } : Props) => {
    
    
    let color:string = languageColors[language]
    

   
    return (
        <View style={styles.container}>
           <View style={styles.card}>
            <View style={styles.row}>
                    <Text style={styles.title}>
                        { title }
                    </Text>
                    <View style={styles.isPublic}>
                        <Text style={styles.isPublicText}>
                            { isPrivate === false ? 'Public' : 'Private'}
                        </Text>
                    </View>
            </View>
            <Text style={styles.description}>
                    { description ?? 'Sem descrição' }
            </Text>
            <View style={styles.colorLanguage}>
                    
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginLeft: 13,
                        backgroundColor: color
                    }}/>
                        <Text style={styles.language}>
                            { language }
                        </Text>
                    
            </View>
           </View>
        </View>       
    )
}

export default RepositoriesList;