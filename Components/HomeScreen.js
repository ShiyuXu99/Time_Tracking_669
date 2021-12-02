import React, { useEffect, useState } from 'react';
// import { Button } from 'react-native-elements';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import { BottomSheet, ListItem, CheckBox } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view';
import { getDataModel } from './DataModel';


function HomeScreen({ navigation }) {
    // const list = [{'Title': 'Homework', 'Time' : '30min'}, {'Title': 'Debug', 'Time' : '30min'},  
    // {'Title': 'Debug', 'Time' : '30min'},  {'Title': 'Debug', 'Time' : '30min'},  {'Title': 'Debug', 'Time' : '30min'},  {'Title': 'Debug', 'Time' : '30min'}]
    // const colorList = ['red','green', 'blue']

  const dataModel = getDataModel();
  const [trackingList, setTrackingList] = useState(dataModel.getTrackingListCopy());

  useEffect(()=>{
    dataModel.subscribeToUpdates(()=>{
      setTrackingList(dataModel.getTrackingListCopy());
    });
  }, []);

    const rightButtons = [
      <TouchableHighlight><Text>Delete</Text></TouchableHighlight>,
    ];
    

    // let startTime=()=>{

    // }
    return (
  
        <View style={styles.container}>
            <View style={styles.uppderContainer}>

            </View>

            <View style={styles.listContainer}>


            <SwipeListView
                    data={trackingList}
                    renderItem={ ({item}) =>  (
                      <View style={styles.listItem}>
                          <View style={styles.listItemContainer}>
        
                              <View>
                                  <Text style={styles.listItemText}>{item.text}</Text>
                                  <View style={styles.timeContainer}>
                                    <Text>{item.Time}</Text><Icon name='edit-3' type='feather' color='#4F4F4F' size='16'/>
                                  </View>
                              </View>

                              <View style={styles.iconContainer}>
                                <View style={styles.play}>
                                  <Icon name='play'
                                    type='feather'
                                    color='black'
                                    onPress={() => {
                                      navigation.navigate("Timer");
                                    }}
                                  />
                                </View>
                              </View>
                          </View>
                      
                      </View>
                  )
                  }
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.deleteContainer}>
                  <View style={styles.delete}>
                    <Icon name='trash'
                      type='feather'
                        color='white'
                    />
                    </View>
                </View>
            )}
            rightOpenValue={-75}
        />

{/* 
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
                                          <Text>{item.Time}</Text><Icon name='edit-3' type='feather' color='#4F4F4F' size='16'/>
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
                /> */}
            </View>

            {/* <View style={styles.navbarContainer}>

            </View> */}

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAFE',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontFamily: 'Rubik',
    },
    uppderContainer: {
        flex: 2,
        width:'100%',
        // backgroundColor: 'red',
    },
    listContainer: {
        flex: 7,
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'column',
        // backgroundColor:'grey',
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
        marginBottom:'7%',
        padding: '7%',
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
        // backgroundColor: 'blue',
    },
    iconContainer: {
        display:'flex',
        flexDirection: 'row',
        // paddingTop: 10,
        // height: 40,
        alignItems: 'center',
    },
    deleteContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: '79%',
      justifyContent: 'flex-end',
    },
    delete: {
      display:'flex',
      flex: 0.25,
      backgroundColor:'#5258E4',
      justifyContent:'center',
      borderRadius: 10,
    },
    play: {
      display:'flex',
      justifyContent:'center',
    },

 
  });
  
  export default HomeScreen;