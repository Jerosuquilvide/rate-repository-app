import React from "react";
import { FlatList, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../customHook/useRepositries";
const RepositoryList = () => {
    const {repositories} = useRepositories()

    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => (<Text> </Text>)}
            renderItem={({item: repo}) => (
                    <RepositoryItem {...repo}/>
            )}
        >
        </FlatList>
    )
    
}

export default RepositoryList;