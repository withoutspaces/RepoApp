import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 50,
        backgroundColor: theme.colors.button,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
    },

    text: {
        fontFamily: theme.fonts.title700,
        fontSize: 15,
        color: theme.colors.primary
    }
})