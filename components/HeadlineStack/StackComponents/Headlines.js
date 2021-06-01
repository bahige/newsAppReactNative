import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import { getHeadlines } from '../../../redux/actions';
import PickerContainer from '../../Picker/PickerContainer';
import DetailedArticle from '../../DetailedArticle';
import {useFocusEffect} from '@react-navigation/native';
import {DetailedArticleDivider, FlatListFooter} from '../../StyledComponents/DetailedArticleStyledComponents';


const Headlines = (props) => {

    const {navigation} = props;
    const headlinesData = useSelector(state => state.headlines);
    const {isLoading, data:{articles}, error } = headlinesData;

    const [selectedCountry, setSelectedCountry] = useState('eg');
    const [selectedCategory, setSelectedCategory] = useState('business');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHeadlines(selectedCountry, selectedCategory));
    }, [selectedCountry, selectedCategory])

    useFocusEffect(
        useCallback(
            () => {
                dispatch(getHeadlines(selectedCountry, selectedCategory));   
            },
            [])
    )

    const renderItem = ({item, index}) => (
        <DetailedArticle article ={item} index={index} navigation={navigation}/>
    )

    return (
        <View>
            <PickerContainer country={selectedCountry} category={selectedCategory}
                             setCountry={setSelectedCountry} setCategory={setSelectedCategory}/>
            {isLoading ? <ActivityIndicator size="large"/> : null}
            {!!error && <Text> {error} </Text> }
            {articles && 
            <FlatList data = {articles}
                    renderItem = {renderItem}
                    keyExtractor = { item => item.title}
                    ItemSeparatorComponent = {DetailedArticleDivider}
                    ListFooterComponent = {FlatListFooter} />
            }
        </View>
    )
}

export default Headlines
