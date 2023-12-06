import React from "react";
import {Image,View,StyleSheet } from "react-native";
import StyledComponentText from "./StyledComponentText";
import RepositoryStats from "./RepositoryStats";
import theme from "../../theme";

const RepositoryItemHeader = props => {
    return (
            <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
                <View style={{ paddingRight : 10 }}>
                    <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
                </View>
                <View style={{ flex : 1 }}>
                    <StyledComponentText fontSize='subheading' fontWeight='bold' >FullName: {props.fullName}</StyledComponentText>
                    <StyledComponentText >{props.description}</StyledComponentText>
                    <StyledComponentText style={styles.language}>{props.language}</StyledComponentText>
                </View>
            </View>
    )
}


const RepositoryItem = (props) => (
                    <View style={styles.container} key={props.id}>
                        <RepositoryItemHeader {...props}></RepositoryItemHeader>
                        <RepositoryStats {...props}></RepositoryStats>
                    </View>
)

const styles = StyleSheet.create({
    container : {
        padding:20, 
        paddingBottom:5, 
        paddingTop:5
    },
    language : {
        padding: 4,
        color: theme.colors.white,
        backgroundColor : theme.colors.primary,
        alignSelf: 'flex-start',
        overflow: 'hidden',
        borderRadius: 4,
        marginTop:4,
        marginBottom: 4
    },
    image : {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})
export default RepositoryItem;