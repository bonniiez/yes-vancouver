import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ProfileView extends Component {
    static navigationOptions = {
        tabBarLabel: 'ProfileView',
        tabBarIcon: ({ focused, tintColor }) => focused ?
        ( <Image 
            source={require('../../images/NavBar/Profile-icon-white@3x.png')}
            size={50}/> 
        ) :
        ( <Image 
            source={require('../../images/NavBar/Profile-icon-orange@3x.png')}
            size={50}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile View</Text>
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