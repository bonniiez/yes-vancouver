import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MessagingView extends Component {
    static navigationOptions = {
        tabBarLabel: 'MessagingView',
        tabBarIcon: ({ tintColor }) => (
            <Image 
                source={require('../../images/Perks-icon-white@3x.png')}
                size={50}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Messaging View</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});