import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

function Overview(props) {
    return (
        <View>
            <Text style={styles.Text}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Text: {
        backgroundColor: 'blue',
    },
    });

export default Overview;