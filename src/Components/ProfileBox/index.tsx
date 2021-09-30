import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles'


type Props = {
    name: string,
    login: string,
    bio: string,
    avatar: string,
}

const ProfileBox = ({ name, login, bio, avatar } : Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileBox}>
                <Image 
                    source={{uri: avatar}} 
                    style={styles.profilePic}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>
                { name }
                </Text>
                <Text style={styles.login}>
                { login }
                </Text>
                <Text style={styles.bio}>
                { bio }
                </Text>
            </View>
        </View>       
    )
}

export default ProfileBox;