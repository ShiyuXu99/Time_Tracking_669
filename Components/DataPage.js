import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


function DataPage({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.topCell}>
                <View style={styles.leftCell}>
                    <View><Text style={styles.subheaderText}>Total Tasks</Text></View>
                    <Text style={styles.bigTextCell}>8</Text>
                </View>
                <View style={styles.rightCell}>
                    <View><Text style={styles.subheaderText}>Total Time</Text></View>
                    <Text style={styles.bigTextCell}>02:30</Text>
                </View>
            </View>
            <View style={styles.bottomCell}>

            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAFE',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        fontFamily: 'Helvetica Neue',
    },
    topCell: {
        flex: 0.2,
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: '5%',
        paddingTop: '5%'

    },
    leftCell: {
        flex: 0.4,
        padding: '5%',
        borderRadius: 10,
        backgroundColor:'white'
    },
    rightCell: {
        flex: 0.4,
        padding: '5%',
        borderRadius: 10,
        backgroundColor:'white'

    },
    subheaderText: {
        fontSize: 18,
    },
    bigTextCell: {
        fontSize: 36,
        marginTop: '15%',
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',

    },
    bottomCell: {
        flex: 0.8,
        width: '100%',
        backgroundColor:'blue'
    }



});

export default DataPage;