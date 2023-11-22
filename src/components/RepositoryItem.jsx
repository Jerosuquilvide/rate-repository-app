import React from "react";
import { Text, View,StyleSheet } from "react-native";
import StyledComponentText from "./StyledText";



const RepositoryItem = (props) => (
                    <View style={styles.container} key={props.id}>
                        <StyledComponentText fontSize='subheading' fontWeight='bold' >FullName: {props.fullName}</StyledComponentText>
                        <StyledComponentText>{props.description}</StyledComponentText>
                        <StyledComponentText>{props.language}</StyledComponentText>
                        <StyledComponentText>RatingAverage: {props.ratingAverage}</StyledComponentText>
                        <StyledComponentText>ForksCount: {props.forksCount}</StyledComponentText>
                        <StyledComponentText>StargazersCount: {props.stargazersCount}</StyledComponentText>
                        <StyledComponentText>ReviewCount: {props.reviewCount}</StyledComponentText>
                    </View>
)

const styles = StyleSheet.create({
    container : {
        padding:20, 
        paddingBottom:5, 
        paddingTop:5
    }
})
export default RepositoryItem;