import React, {useEffect, useState} from 'react';
import { FlatList, View, ScrollView, Pressable } from 'react-native';
import DetailedArticle from '../../DetailedArticle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ClearHistoryText} from '../../StyledComponents/DetailedArticleStyledComponents';

const HeadlinesHistory = (props) => {

    const {navigation} = props;
    const [articlesArray, setArticlesArray] = useState([]);

    const getArticlesFromStorage = async () => {
        AsyncStorage.getItem('articles')
        .then((articles) => {
          const articlesArray = articles ? JSON.parse(articles) : [];
          setArticlesArray(articlesArray.reverse());
        });
    }
    
    const removeArticlesFromStorage = async () => {
        await AsyncStorage.removeItem('articles');
    }

    useEffect(() => {
        getArticlesFromStorage();
    }, [articlesArray])
  
    const renderItem = ({item, index}) => (
        <DetailedArticle article={item} index={index} navigation={navigation}/>
    )

    return (
        <ScrollView>
            <Pressable onPress={removeArticlesFromStorage}> 
               <ClearHistoryText>CLEAR HISTORY</ClearHistoryText>
            </Pressable>
            <FlatList data ={articlesArray}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index }/>
        </ScrollView>
    )
}

export default HeadlinesHistory
