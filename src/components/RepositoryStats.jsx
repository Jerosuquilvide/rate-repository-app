import React from "react"
import { View, Text } from "react-native"
import StyledComponentText from "./StyledComponentText"

const parseThousans = value => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

const RepositoryStats = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledComponentText fontWeight='bold'>Stars</StyledComponentText>
                <StyledComponentText>{parseThousans(props.stargazersCount)}</StyledComponentText>
            </View>
            <View>
                <StyledComponentText fontWeight='bold'>Forks</StyledComponentText>
                <StyledComponentText>{parseThousans(props.forksCount)}</StyledComponentText>
            </View>
            <View>
                <StyledComponentText fontWeight='bold'>Review</StyledComponentText>
                <StyledComponentText>{props.reviewCount}</StyledComponentText>
            </View>
            <View>
                <StyledComponentText fontWeight='bold'>Rating</StyledComponentText>
                <StyledComponentText>{props.ratingAverage}</StyledComponentText>
            </View>
        </View>
    )
}

export default RepositoryStats