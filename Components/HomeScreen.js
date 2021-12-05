import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import { BottomSheet, ListItem, CheckBox } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view';
import { getDataModel } from './DataModel';


function HomeScreen({ navigation }) {

  const dataModel = getDataModel();
  const [trackingList, setTrackingList] = useState(dataModel.getTrackingListCopy());

  let getTime = (time)=>{
      let date = new Date(null);
      date.setSeconds(time); // specify value for SECONDS here
      let result = date.toISOString().substr(11, 8);
      return result;
  }
  useEffect(()=>{
    dataModel.subscribeToUpdates(()=>{
      setTrackingList(dataModel.getTrackingListCopy());
    });
  }, []);



    return (
  
        <View style={styles.container}>
            <View style={styles.uppderContainer}>

            </View>

            <View style={styles.listContainer}>


            <SwipeListView
                    data={trackingList}
                    renderItem={ ({item}) =>  (
                      console.log(item.color),
                      console.log(item.icon),
                      <View style={styles.listItem}>
                          <View style={styles.listItemContainer}>

                            <View style={styles.categoryContainer}>
                                <View style={{
                                  display: 'flex',
                                  justifyContent:'center',
                                  alignItems: 'center',
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: item.color,
                                }}>
                                  <Icon name={item.icon}
                                    type='ionicon'
                                    color='white'
                                  />
                                </View>
                              </View>
        
                              <View>
                                  <Text style={styles.listItemText}>{item.text}</Text>
                                  <View style={styles.timeContainer}>

                                    <Text style={styles.timeText}>{getTime(item.time)}</Text>
                                      <Icon name='edit-3' type='feather' color='#4F4F4F'
                                            size='16'
                                            onPress={() => {
                                                navigation.navigate("SignUp");
                                            }}
                                      />

                                  </View>
                              </View>

                              <View style={styles.iconContainer}>
                                <View style={styles.play}>
                                  <Icon name='play'
                                    type='feather'
                                    color='black'
                                    onPress={() => {
                                      navigation.navigate("Timer", {
                                          item: item
                                      });
                                    }}
                                  />
                                </View>
                              </View>
                          </View>
                      </View>
                  )
                  }
            renderHiddenItem={ ({item}, rowMap) => (
                <View style={styles.deleteContainer}>
                  <View style={styles.delete}>
                  <TouchableOpacity
                  onPress={() => {
                    dataModel.deleteItem(item.key);
                  }}>
                    <Icon name='trash'
                      type='feather'
                        color='white'
                    />
                  </TouchableOpacity>
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
        width: '45%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      },
      timeText: {
        fontSize: 14,
        color: '#4F4F4F',
      },
      navbarContainer: {
        flex: 1,
        width:'100%',
    },
    iconContainer: {
        display:'flex',
        flexDirection: 'row',
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
    categoryContainer: {
      width: '20%',
      height: '100%',
      borderRadius: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

 
  });
  
  export default HomeScreen;