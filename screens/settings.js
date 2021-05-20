import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class settings extends React.Component{
    render(){
        return(
            <View>
                <Text style={{color:"black",marginTop:300,alignSelf:"center",fontSize:60,fontWeight:'bold'}}>Settings!</Text>
            </View>
        )
    }
}