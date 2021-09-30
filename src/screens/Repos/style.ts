import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    owner: {
        marginTop: 40,
        marginLeft: 14
    },
    ownerText: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.iceWhite,
        fontSize: 26
    }

})
