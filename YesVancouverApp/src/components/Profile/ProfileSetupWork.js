import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import Header from '../Navigation/Header';


export default class ProfileSetupWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            jobTitle: '',
            company: '',
            otherInfo: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header style={styles.header}/>
                    
                    <View style={styles.headerIconContainer}>
                        <View style={styles.backArrowContainer}>
                            <Image source={require('../../images/Header/White-arrow@3x.png')}/>
                        </View>

                        <View style={styles.pageIndicatorContainer}>
                            <Image source={require('../../images/Login-Signup/Pagination/Pagination1@3x.png')}/>
                        </View>

                        <View style={styles.backArrowContainer}></View>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Enter information you would like other YES! Members to see
                    </Text>

                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Name"
                            placeholderTextColor='#979797'
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="go"
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flex: 1
    },
    header: {
        flex: 1,
        width: null,
        height: null
    },
    headerIconContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backArrowContainer: {
        flex: 1,
        alignItems: 'center'
    },
    pageIndicatorContainer: {
        flex: 4,
        alignItems: 'center'
    },
    content: {
        flex: 7,
        paddingHorizontal: 48,
        paddingTop: 66
    },
    title:{
        fontFamily: 'alternate-gothic-no3-d-regular',
        fontSize: 24,
        color: '#F74F72',
        marginBottom: 47
    },
    textInput: {
        fontFamily: 'alternate-gothic-no3-d-regular',
        fontSize: 24,
        color: 'black',
        height: 40,
        paddingHorizontal:5
    },
    textInputContainer: {
        borderBottomWidth:1,
        borderBottomColor: 'black'
    }
});
