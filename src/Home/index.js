import React from 'react';
import {
    StyleSheet, 
    View,
    useWindowDimensions,
    Text,
    FlatList,
    SafeAreaView,
    } 
  from 'react-native';
import ButtonTour from '../ButtonTour';

export default function Home() {
  const {width} = useWindowDimensions(); 
  const lista = ['Cultura','Parques','Noturno']
  return (
    <SafeAreaView style={[styles.container]}>
        <View style={styles.body}>
            <Text>Role Aleatorio</Text>
                <View style={[styles.body, {width: width*0.7}]}>
                    <FlatList 
                        contentContainerStyle={{ justifyContent: 'space-evenly' }}
                        data={lista}
                        extraData={item=> item}
                        renderItem={({item})=>
                            <View style={[styles.body]}>
                                <ButtonTour category={item}/>
                            </View>
                        }            
                    />
                </View>
            </View>
            <Text>By SoftHouseOz</Text>
      </SafeAreaView> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  body: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent:'space-between',
  },
});
