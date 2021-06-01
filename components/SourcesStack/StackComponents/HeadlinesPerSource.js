import React, {useCallback, useEffect} from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getHeadlinesBySource } from '../../../redux/actions';
import DetailedArticle from '../../DetailedArticle';
import {useFocusEffect} from '@react-navigation/native';
import {DetailedArticleDivider, FlatListFooter} from "../../StyledComponents/DetailedArticleStyledComponents";

const HeadlinesPerSource = (props) => {
    const headlinesData = useSelector(state => state.headlines);
    const {isLoading, data: {articles}, error } = headlinesData;

    const {navigation, route}= props;
    const source =route.params.source; 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHeadlinesBySource(source))
    }, [])

    useFocusEffect(
        useCallback(
            () => {
                dispatch(getHeadlinesBySource(source))
            },
            [],
        )
    )

    const renderItem = ({item, index}) => (
        <DetailedArticle article ={item} index={index} navigation={navigation}/>
    )


    return (
        <View>
            {isLoading ? <ActivityIndicator size="large"/> : null}
            {!!error && <Text> {error} </Text>}
            {articles && 
            <FlatList data = {articles}
                    renderItem = {renderItem}
                    keyExtractor = { item => item.title}
                    ItemSeparatorComponent = {DetailedArticleDivider}
                    ListFooterComponent = {FlatListFooter}/>
            }
        </View>
    )
}

export default HeadlinesPerSource
