import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.iceWhite,
        width: '85%',
        height: 250,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center'

    },
    profileBox: {
        width: 124,
        height: 124,
        backgroundColor: theme.colors.border,
        borderRadius: 62,
        alignSelf: 'center',
        marginTop: 10
    },
    profilePic: {
        width: 116,
        height: 116,
        backgroundColor: theme.colors.primary,
        borderRadius: 58,
        alignSelf: 'center',
        marginTop: 4
    },

    info: {
        alignItems: 'center',
        flexDirection: 'column'
    },

    name: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.title,
        marginTop: 3,
        lineHeight: 25
    },
    login: {
        fontFamily: theme.fonts.title400,
        fontSize: 14,
        color: theme.colors.title,
        marginTop: 0,
    },
    bio: {
        fontFamily: theme.fonts.text300,
        fontSize: 12,
        color: theme.colors.title,
        marginTop: 8,
    }

})
