import React from 'react'
import { View, Text, Image, Pressable} from 'react-native'

const DetailedArticle = (props) => {
    const {article, index, navigation} = props;

    return (
        <View key={index}>
            <Pressable onPress={() => navigation.navigate("Headline Details", {headline: article})}>
                <Image style={{width:250, height:100}} source={{ uri: article.urlToImage}}></Image>
                <Text>{article.title}</Text>
                <Text>{article.description}</Text>
                <Text>{article.source && article.source.name}</Text>
                <Text>{article.publishedAt}</Text>
            </Pressable>
        </View>
    )
}

export default DetailedArticle
