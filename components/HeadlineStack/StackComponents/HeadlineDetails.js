import React from 'react'
import { View, Text, Image } from 'react-native'

const HeadlineDetails = (props) => {
    const {route}= props;
    const headline =route.params.headline;   

    return (
        <View>
            <Image style={{width:250, height:100}} source={{ uri: headline.urlToImage}}></Image>
            <Text>{headline.title}</Text>
            <Text>{headline.source && headline.source.name}</Text>
            <Text>{headline.author}</Text>
            <Text>{headline.content}</Text>
        </View>
    )
}

export default HeadlineDetails
