import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const PickerContainer = (props) => {
    const {country, category, setCountry, setCategory} = props;

    return (
        <View>
            <Picker
                style={styles.picker}
                selectedValue={country}
                onValueChange={(itemValue, itemIndex) =>
                    setCountry(itemValue)
                }>
                <Picker.Item label="Egypt" value="eg" />
                <Picker.Item label="UAE" value="ae" />
            </Picker>
            <Picker
                style={styles.picker}
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

const styles = StyleSheet.create({
    picker:{
        margin: 5,
        height: 50,
        width: "90%",
        alignSelf:'center'
    }
})
export default PickerContainer
