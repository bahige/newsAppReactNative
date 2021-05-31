import React from 'react'
import { View, Text, Image, Pressable} from 'react-native';
import {saveArticlesToStorage} from './functions';
import {ArticleTitle, ArticleListItemContainer, ArticleSource, ArticleDate, ArticleDescription} from './StyledComponents/DetailedArticleStyledComponents';
import Moment from 'react-moment';

const DetailedArticle = (props) => {
    const {article, index, navigation} = props;

    
    const pressHandler = () => {
        navigation.navigate("Headline Details", {headline: article});
        saveArticlesToStorage(article);
    }

    return (
        <ArticleListItemContainer key={index}>
            <Pressable onPress={pressHandler}>
                <Image  style={{width:'90%', height:250, alignSelf:'center'}} source={{ uri: article.urlToImage}}></Image>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <ArticleSource>{article.source && article.source.name}</ArticleSource>
                <ArticleDate><Moment format="MMMM DD, YYYY" date={article.publishedAt}></Moment> at <Moment format="h:mm:ss a" date={article.publishedAt}></Moment></ArticleDate>
            </Pressable>
        </ArticleListItemContainer>
    )
}

export default DetailedArticle
