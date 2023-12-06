import React from "react";
import { Text, View } from "react-native";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import LogInForm from "../pages/LoginForm";

const Main = () => {
    return (
        <View style={{flex: 1}}>
            <AppBar/>
            <Routes>
            
                <Route path="/" exact Component={RepositoryList}/>
            
                <Route path="/login" exact Component={LogInForm}>
                </Route>
            </Routes>
        
        </View>
    )
}

export default Main