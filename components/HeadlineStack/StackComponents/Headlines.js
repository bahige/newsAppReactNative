import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import { getHeadlines, getSources } from '../../../redux/actions';


const Headlines = () => {

    const headlinesData = useSelector(state => state.headlines);
    const {isLoading, data, error } = headlinesData;

    // const sourcesData = useSelector(state => state.sources);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSources());
        dispatch(getHeadlines());
        // console.log('sourcesData', sourcesData);
        console.log('headlinesData', headlinesData);
    }, [])

    return (
        <View>
            {isLoading ? <Text> Loading </Text> : <Text> Finished Loading </Text>}
            <Text>{data.articles}</Text>
            <Text>Headline  Stack </Text>
        </View>
    )
}

export default Headlines
