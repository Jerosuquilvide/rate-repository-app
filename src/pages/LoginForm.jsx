import React from "react";
import { Formik, useField } from "formik";
import { Button, View, StyleSheet} from "react-native";
import StyledComponentTextInput from '../components/StyledComponentTextInput.jsx'
import StyledComponentText from '../components/StyledComponentText.jsx'
import { loginValidationSchema } from "../validationSchemas/loginSchema.js";

const initialValues = {
    email: '',
    password: ''
}
const styles = StyleSheet.create({
    error: {
        color : 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop : -5
    }
})


const FormikInputValue = ({ name, ...props }) => {
    const [field,meta,helpers] = useField(name)
    return (
        <>
            <StyledComponentTextInput 
            error={meta.error}
            value={field.value} 
            onChangeText={value => helpers.setValue(value)}
            {...props}
            />
            {meta.error && <StyledComponentText style={styles.error} >{meta.error}</StyledComponentText>}
        </>
    )
}

const LogInForm = () => {
    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return(
                    <View>
                        <FormikInputValue placeholder="Email" name="email"/>
                        <FormikInputValue placeholder="Password" name="password" secureTextEntry/>
                        <Button onPress={handleSubmit} title='Log In'/>
                    </View>
                )
            }}
        </Formik>
    )
}

export default LogInForm