import React, {useState, useEffect} from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import { getHeadlines, getSources } from '../../../redux/actions';
import PickerContainer from '../../Picker/PickerContainer';
import DetailedArticle from '../../DetailedArticle'


const Headlines = (props) => {

    const {navigation} = props;
    const headlinesData = useSelector(state => state.headlines);
    const {isLoading, data:{totalResults, articles}, error } = headlinesData;

    const [selectedCountry, setSelectedCountry] = useState('eg');
    const [selectedCategory, setSelectedCategory] = useState('business');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHeadlines(selectedCountry, selectedCategory));
    }, [selectedCountry, selectedCategory])

    const renderItem = ({item, index}) => (
        <DetailedArticle article ={item} index={index} navigation={navigation}/>
    )

    return (
        <View>
            <PickerContainer country={selectedCountry} category={selectedCategory}
                             setCountry={setSelectedCountry} setCategory={setSelectedCategory}/>
            <Text>totalResults: {totalResults} </Text>
            {isLoading ? <ActivityIndicator size="large"/> : 
            error ? <View> {error} </View> :
            articles && 
            <FlatList data = {articles}
                    renderItem = {renderItem}
                    keyExtractor = { item => item.title}/>
            }
        </View>
    )
}

export default Headlines
