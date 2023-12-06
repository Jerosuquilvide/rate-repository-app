import React from "react";
import { Formik, useField } from "formik";
import { Button, TextInput, View } from "react-native";
import StyledComponentTextInput from '../components/StyledComponentTextInput.jsx'
const initialValues = {
    email: '',
    password: ''
}

const FormikInputValue = ({ name, ...props }) => {
    const [field,meta,helpers] = useField(name)
    return (
        <StyledComponentTextInput 
        value={field.value} 
        onChangeText={value => helpers.setValue(value)}
        {...props}
        />
    )
}

const LogInForm = () => {
    return (
        <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return(
                    <View>
                        <FormikInputValue placeholder="Tu email" name="email"/>
                        <FormikInputValue placeholder="Tu contraseña" name="password"/>
                        <Button onPress={handleSubmit} title='Log In'/>
                    </View>
                )
            }}
        </Formik>
    )
}

export default LogInForm