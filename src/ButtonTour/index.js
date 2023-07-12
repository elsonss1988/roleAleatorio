import React from 'react';
import {
    View, 
    StyleSheet,
    TouchableOpacity,
    Text, 
    useWindowDimensions,
    Alert
} from 'react-native';

export default function ButtonTour({category}) {
    const {height, width} = useWindowDimensions();
    function showMessage(category) {
        console.log(category)
        Alert.alert(`Diga olá a categoria \n ${category} !`);
      }
    return(
        <View style={[styles.body, {width: width*0.7}]}>
            <TouchableOpacity style={styles.button} onPress={()=>showMessage(category)}>
                <Text style={styles.buttonText}> {category} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#FF980E',
        borderRadius: 20,
        padding: 20,
        margin:20,

      },
      buttonText: {
        textAlign: 'center'
      }
})