import React, {useEffect} from 'react'
import { View, Text, ActivityIndicator, FlatList, Pressable } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import { getSources } from '../../../redux/actions';
import {SourceListItem, SourceListButton} from '../../StyledComponents/SourceListItemStyledComponents'

const Sources = (props) => {
    const {navigation} = props;
    const sourcesData = useSelector(state => state.sources);
    const {isLoading, data:{data}, error} =sourcesData;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSources());
    }, [])

    const renderItem = ({item, index}) => (
        <SourceListItem>
            <Text>{item.name}</Text>
            <Pressable 
            onPress={()=> navigation.navigate("Headlines Per Source", {source: item.id})}>
               <SourceListButton>VIEW</SourceListButton> 
            </Pressable>
        </SourceListItem>
    )

    return (
        <View>
            {isLoading ? <ActivityIndicator size="large"/> :
            error ? <View> {error} </View> :
            <FlatList  data = {data && data.sources}
                    renderItem = {renderItem}
                    keyExtractor = { item => item.id}/>
        }
        </View>
    )
}

export default Sources
