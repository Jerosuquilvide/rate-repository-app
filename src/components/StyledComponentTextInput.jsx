import React from "react";
import { StyleSheet, TextInput } from "react-native";
// import th
const styles = StyleSheet.create({
    textInput : {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    }
})

const StyledComponentTextInput = ({style = {}, ...props}) => {
    const styledInput = {
        ...styles.textInput,
        ...style
    }
    return (
        <TextInput style={styledInput} {...props}/>
    )
}

export default StyledComponentTextInput