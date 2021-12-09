import React from 'react'
import {StyleSheet, Button, View, SafeAreaView, Text} from 'react-native'
export default function HomeScreen({ navigation }) {
    const Separator = () => (
        <View style={styles.separator} />
      );
      
    goToSecondScreen =()=>{
        navigation.navigate('SecondScreen')
    }
    goToThirdScreen =()=>{
        navigation.navigate('ThirdScreen')
    }
    goToCuartaScreen =()=>{
        navigation.navigate('CuartaScreen')
    }
    return (
        <><View style={{ marginTop: 150}}>
            <Text style={{ marginTop: 150, fontSize: 34 } }>Pantalla Principal</Text>
            <Separator />
           
            <Button style={{ marginTop: 150}}title="Ir a pantalla 2" onPress={() => goToSecondScreen()} />
            <Separator />
            <Button title="Ir a pantalla 3" onPress={() => goToThirdScreen()} />
            <Separator />
            <Button title="Ir a pantalla 4" onPress={() => goToCuartaScreen()} />
            <Separator />
        </View></>
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