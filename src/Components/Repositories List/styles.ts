import { StyleSheet, StatusBar } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
       
    },
    card: {
        backgroundColor: theme.colors.iceWhite,
        width: '100%',
        height: 130,
        marginTop: 5,
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'flex-start',
        maxWidth: '90%',
    },

    row: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 13,
        justifyContent: 'center',
        maxWidth: '100%'
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 15,
        maxWidth: '80%'
        

    },
    isPublic: {
        width: 50,
        height: 20,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.iceWhite,
        alignItems: 'center',
        marginLeft: 4

    }, 
    isPublicText: {
        fontFamily: theme.fonts.title400,
        color: theme.colors.title,
        fontSize: 12
    },
    description: {
        fontFamily: theme.fonts.text300,
        fontSize: 10,
        marginLeft: 13,
        maxWidth: '95%',
        
    },
    colorLanguage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    language: {
        fontFamily: theme.fonts.title400,
        fontSize: 12,
        marginLeft: 4,
        //marginTop: 20
    }

})