import React, {useState} from 'react'
import { View } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const PickerContainer = (props) => {
    const {country, category, setCountry, setCategory} = props;

    return (
        <View>
            <Picker
                style={{height:50, width:'100%'}}
                selectedValue={country}
                onValueChange={(itemValue, itemIndex) =>
                    setCountry(itemValue)
                }>
                <Picker.Item label="Egypt" value="eg" />
                <Picker.Item label="UAE" value="ae" />
            </Picker>
            <Picker
                style={{height:50, width:'100%'}}
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) =>
                    setCategory(itemValue)
                }>
                <Picker.Item label="Business" value="business" />
                <Picker.Item label="Sports" value="sports" />
            </Picker>
        </View>
    )
}

export default PickerContainer
