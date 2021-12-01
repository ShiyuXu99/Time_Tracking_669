import React, { useEffect, useState } from 'react';
// import { Button } from 'react-native-elements';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BottomSheet, ListItem, CheckBox } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'

// import { getDataModel } from './DataModel';

function HomeScreen({ navigation }) {
    const list = [{'Title': 'Homework', 'Time' : '30min'}, {'Title': 'Debug', 'Time' : '30min'},  
    {'Title': 'Debug', 'Time' : '30min'},  {'Title': 'Debug', 'Time' : '30min'},  {'Title': 'Debug', 'Time' : '30min'},  {'Title': 'Debug', 'Time' : '30min'}]
    const colorList = ['red','green', 'blue']


    return (
  
        <View style={styles.container}>
            <View style={styles.uppderContainer}>

            </View>

            <View style={styles.listContainer}>
                <FlatList
                    contentContainerStyle={styles.listContentContainer}
                    data={list}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listItem}>
                                <View style={styles.listItemContainer}>
                                  
                                    <View>
                                        <Text style={styles.listItemText}>{item.Title}</Text>
                                        <View style={styles.timeContainer}>
                                        <Text>{item.Time}</Text><Icon name='edit-3' type='feather' color='#4F4F4F' size='18'/>
                                        </View>
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Text>
                                            <Icon name='play'
                                             type='feather'
                                              color='black'
                                              onPress={() => {
                                                navigation.navigate("Timer");
                                            }}
                                              />
                                        </Text>
                                    </View>
                                </View>
                            
                            </View>
                        );
                    }}
                />
            </View>

            <View style={styles.navbarContainer}>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontFamily: 'Rubik',
    },
    uppderContainer: {
        flex: 2,
        width:'100%',
        backgroundColor: 'red',
    },
    listContainer: {
        flex: 7,
        padding: 30,
        width: '100%',
        flexDirection: 'column',
        backgroundColor:'grey',
      },
      listContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        width:'100%',
        // backgroundColor: 'yellow',
        borderRadius: 6,
      },
      listItem: {
        flex: 1,
        marginBottom:'8%',
        padding: '8%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
      }, 
      listItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
      },
      listItemText: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
      },
      timeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
      },
      timeText: {
        fontSize: 12,
        color: '#4F4F4F',

      },
      navbarContainer: {
        flex: 1,
        width:'100%',
        backgroundColor: 'blue',
    },
    iconContainer: {
        display:'flex',
        paddingTop: 10,
        height: 40,
    }
 
  });
  
  export default HomeScreen;