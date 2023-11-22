import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../../theme";
const styles = StyleSheet.create({
    text: {
        fontSize:theme.fontSizes.body,
        color:theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color : theme.colors.textSecondary
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    subheading:{
        fontSize: theme.fontSizes.subheading
    },
    small: {
        fontSize:10
    }
})

export default function StyledComponentText({children, color, fontSize, fontWeight, style, ...restProps}){
    const StylesList = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondaty' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold
    ]

    return (
        <Text style={StylesList} {...restProps}>
            {children}
        </Text>
    )
}

