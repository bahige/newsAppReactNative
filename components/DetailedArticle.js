import React from 'react'
import {Image, Pressable, Text, View, StyleSheet} from 'react-native';
import {saveArticlesToStorage} from './functions';
import {ArticleTitle, ArticleSource, ArticleDate, ArticleDescription, ArticleLastViewedDate} from './StyledComponents/DetailedArticleStyledComponents';
import Moment from 'react-moment';


const DetailedArticle = (props) => {
    const {article, index, navigation} = props;

    
    const pressHandler = () => {
        navigation.navigate("Headline Details", {headline: article});
        saveArticlesToStorage(article);
    }

    return (
        <View style={styles.container} key={index}>
            <Pressable onPress={pressHandler}>
                <Image  style={{width:'95%', height:250, alignSelf:'center'}} source={{ uri: article.urlToImage}}></Image>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <ArticleSource>{article.source && article.source.name}</ArticleSource>
                <ArticleDate>
                    <Moment format="MMMM DD, YYYY" date={article.publishedAt} element={Text}></Moment> <Text> at </Text> <Moment format="h:mm:ss a" date={article.publishedAt} element={Text}></Moment>
                </ArticleDate>
                <ArticleLastViewedDate>
                    {article.viewedAt ? <Text>Last Viewed at : </Text> : null}                   
                    {article.viewedAt ? <Moment format='MMMM Do YYYY, h:mm:ss a' date={article.viewedAt} element={Text}></Moment>  : null} 
                </ArticleLastViewedDate>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:5,
    }
})

export default DetailedArticle
