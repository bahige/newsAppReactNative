import React from 'react'
import {Image, Pressable, Text} from 'react-native';
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
                <ArticleDate>
                    <Moment format="MMMM DD, YYYY" date={article.publishedAt} element={Text}></Moment> <Text> at </Text> <Moment format="h:mm:ss a" date={article.publishedAt} element={Text}></Moment>
                    {/* {moment(article.publishedAt).format("MMMM Do YYYY")} at {moment(article.publishedAt).format("h:mm:ss a")} */}
                </ArticleDate>
                <ArticleDate>
                    {article.viewedAt ? <Text>Last Viewed at : </Text> : null}
                    {/* {article.viewedAt ? <Text>{moment(article.viewedAt).format("MMMM Do YYYY, h:mm:ss a")}  </Text> : null} */}
                   
                    {article.viewedAt ? <Moment format='MMMM Do YYYY, h:mm:ss a' date={article.viewedAt} element={Text}></Moment>  : null} 
                </ArticleDate>
            </Pressable>
        </ArticleListItemContainer>
    )
}

export default DetailedArticle
