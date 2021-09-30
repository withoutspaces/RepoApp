import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#eee',
        marginTop: 40,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8
    },
    input: {
        fontFamily: theme.fonts.title400,
        
    }
})