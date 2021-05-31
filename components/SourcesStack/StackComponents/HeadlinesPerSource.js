import React, {useEffect} from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getHeadlinesBySource } from '../../../redux/actions';
import DetailedArticle from '../../DetailedArticle';

const HeadlinesPerSource = (props) => {
    const headlinesData = useSelector(state => state.headlines);
    const {isLoading, data: {articles}, error } = headlinesData;

    const {navigation, route}= props;
    const source =route.params.source; 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHeadlinesBySource(source))
    }, [])

    const renderItem = ({item, index}) => (
        <DetailedArticle article ={item} index={index} navigation={navigation}/>
    )


    return (
        <View>
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

export default HeadlinesPerSource
