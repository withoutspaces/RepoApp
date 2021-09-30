import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    searchBarContainer: {
        marginTop: 28,
        width: '95%',
        alignSelf: 'center'
        
    },
    
    button: {
        alignSelf: 'center'
    },
    userNotFound: {
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: theme.fonts.title400,
        color: theme.colors.primary,
        fontSize: 16,
        textAlign: 'center'
    }
})