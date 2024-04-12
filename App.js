import React from "react";
import { StatusBar } from 'expo-status-bar';
//import { Button } from 'react-bootstrap';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform,
  TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Overview from "./app/screens/Overview";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


function App() {
  return (
    // <SafeAreaView style={styles.container} >
    //   <Overview />
    //   <Button title="Click Me" onPress={() => alert("Are you sure?")}/>
    //   <NavigationContainer>
    //     <Button title="overview page"
    //     onPress={() => navigator.nav}/>
    //   </NavigationContainer>
    //   <Text>Hello Kat! This is lorem a really long thing that is also really long and this is also super super long</Text>
    //   <StatusBar style="auto" />
    //   {myArray}
    //   <Image source={require("./app/assets/icon.png")} style={styles.Image}/>
    //   <TouchableHighlight onPress={() => console.log("image touched")}>
    //     <Image source={{ uri: "https://picsum.photos/200/300", width: 200, height: 300}}  />
    //   </TouchableHighlight>
    // </SafeAreaView>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

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


export default App;
