import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import StyledComponentText from "./StyledComponentText";
import theme from "../../theme";
import Constants from 'expo-constants'
import { Link, useResolvedPath } from "react-router-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10,
        flexDirection: 'row',        
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.appBar.textUnactive,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary,
    }
})

const AppBarTab = ({to, children}) => {
    const {pathname} = useResolvedPath()
    const active = pathname === to
    const styledText = [
        style.text,
        active && style.active
    ]
    return(
        <Link to={to} underlayColor="transparent">
            <StyledComponentText fontWeight='bold' style={styledText}>{children}</StyledComponentText>
        </Link>
    )
}


const AppBar = (props) => {
    return (
        <View style={style.container}>
            <ScrollView horizontal style={style.scroll}>
                <AppBarTab to="/">Repositories</AppBarTab>
                <AppBarTab to="/login">Sing in</AppBarTab>
                <AppBarTab to="/register">Register</AppBarTab>
                <AppBarTab to="/about">About us</AppBarTab>
                <AppBarTab to="/info">Info</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar