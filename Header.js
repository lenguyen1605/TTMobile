import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
    return (
        <>
            <TouchableOpacity style={styles.button}>
            <Icon name="bars" style={styles.bar}></Icon>
            </TouchableOpacity>
            <Text style={styles.header}>Tổng hợp dữ liệu</Text>
            <View style={styles.line}></View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        top: 45,
        left: 10,
        padding: 10,
        zIndex: 1,
        // fontSize: 27
      },
      bar: {
        fontSize: 27
      },
      header: {
        position: 'absolute',
        top: 35, 
        padding: 20,
        fontSize: 23,
        fontWeight: 'bold'  
      },
      line: {
        height: 1,
        backgroundColor: 'black',
        width: 500,
        position: 'absolute',
        top: 100
      },

})