import React from "react";
import { StatusBar } from 'expo-status-bar';
//import { Button } from 'react-bootstrap';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform,
  TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
  var myArray = [];
  var number = 0;
  for(let i = 0; i < 3; i++)
    {
      myArray.push(
        <View><Text>{i}</Text></View>
      );
    }

    const handlePress = () => console.log("Clicked!!");

  console.log("Hello World");
  return (
    <SafeAreaView style={styles.container} >
      <Button title="Click Me" onPress={() => alert("Are you sure?")}/>
      <Text>Hello Kat! This is lorem a really long thing that is also really long and this is also super super long</Text>
      <StatusBar style="auto" />
      {myArray}
      <Image source={require("./assets/icon.png")} style={styles.Image}/>
      <TouchableHighlight onPress={() => console.log("image touched")}>
        <Image source={{ uri: "https://picsum.photos/200/300", width: 200, height: 300}}  />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: '52px',
    height: '52px',
  },
});
