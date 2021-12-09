import React from 'react'

import {StyleSheet,Button,View, Text} from 'react-native'
export default function CuartaScreen({ navigation}) {
    const Separator = () => (
        <View style={styles.separator} />
      );
    
    volver =() => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={{ marginTop: 150}}>
            <Text style={{ marginTop: 150, fontSize:34}}>Cuarta Pantalla</Text>

            <Separator />
            <Button  title="Ir a la Pantalla 2" onPress={()=>goToSecondScreen()}/>
            <Separator />
            <Button  title="Ir a la Pantalla 3" onPress={()=>goToThirdScreen()}/>
            <Separator />
            <Button title="Volver" onPress={()=> volver()}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });