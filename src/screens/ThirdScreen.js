import React from 'react'
import {StyleSheet, Button,View, Text} from 'react-native'
export default function ThirdScreen({ navigation }) {
    const Separator = () => (
        <View style={styles.separator} />
      );
      goToSecondScreen =()=>{
        navigation.navigate('SecondScreen')
    }
      goToCuartaScreen =()=>{
        navigation.navigate('CuartaScreen')
    }
    volver =() => {
        navigation.navigate('HomeScreen')
    }


    return (
        <View  style={{ marginTop: 150}}>
            <Text style={{ marginTop: 150, fontSize:34}}>Tercera Pantalla</Text>
            <Separator />
            <Button  title="Ir a la Pantalla 4" onPress={()=>goToCuartaScreen()}/>
            <Separator />
            <Button  title="Ir a la Pantalla 2" onPress={()=>goToSecondScreen()}/>
            <Separator/>
            <Button style={{styles}}title ="volver" onPress={()=> volver()}/>
            
        </View>
    )
}
const styles = StyleSheet.create({
   
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
