import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Image } from 'react-native';

// import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view';
import { getDataModel } from './DataModel';
import { logout } from './DataModel'


function HomeScreen({ navigation }) {

  const dataModel = getDataModel();
  const [trackingList, setTrackingList] = useState(dataModel.getTrackingListCopy());
  

  let getTime = (time)=>{
      let date = new Date(null);
      date.setSeconds(time); // specify value for SECONDS here
      let result = date.toISOString().substr(11, 8);
      console.log(result)
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
          <View style={styles.imageCell}>
            <Text style={styles.helloText}>Let's track your day!</Text>
          </View>

          <View style={styles.logoutCell}>
            <Image style={styles.image} source={require('./image/cat3.gif')} />
              <TouchableOpacity onPress={() => {
                logout;
                navigation.navigate("Login");}}>
                <Icon name='log-out' type='feather' size='24' color='black'/>
                {/* <Text style={styles.logoutText}>Log Out</Text> */}
              </TouchableOpacity>
          </View>

        </View>


        <View style={styles.listContainer}>


          <SwipeListView
            data={trackingList}
            renderItem={ ({item}) =>  (
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

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("TaskDetail", {
                          task: item
                      });
                    }}>
                      <View>
                        <Text style={styles.listItemText}>{item.text}</Text>
                        <View style={styles.timeContainer}>

                          <View style={styles.timeIcon}>
                            <Icon name='clock' type='feather' size='16' color='#4F4F4F' />
                          </View>
                          <View style={styles.timeTextCell}>
                            <Text style={styles.timeText}>{getTime(item.time)}</Text>
                          </View>

                        </View>
                      </View>
                    </TouchableOpacity>

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
            )}
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
          rightOpenValue={-120}/>

        </View>

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
        flex: 1.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width:'100%',
        paddingHorizontal: 30,
    },
    imageCell: {
      flex: 8,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    image: {
      width: '60%',
      height: '70%',
    },
    logout: {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
    logoutText: {
      fontWeight: '500',
      fontSize: 18,
    },
    helloText: {
      fontWeight: '500',
      fontSize: 24,
      letterSpacing: 0.5,
    },
    logoutCell: {
      flex: 2,
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      // backgroundColor:'grey',
      height: '100%',
    },
    listContainer: {
        flex: 8,
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
      timeIcon: {
        marginRight: 5,
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
      flex: 0.3,
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
    imageContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      width:'100%',
      height: '100%',
  },

 
  });
  
  export default HomeScreen;