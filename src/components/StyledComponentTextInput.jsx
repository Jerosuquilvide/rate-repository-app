import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    textInput : {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        marginTop: 12
    },
    error: {
        borderColor: 'red'
    }
})

const StyledComponentTextInput = ({style = {},error, ...props}) => {
    const styledInput = [
        styles.textInput,
        style,
        error && styles.error
    ]
    return (
        <TextInput style={styledInput} {...props}/>
    )
}

export default StyledComponentTextInput