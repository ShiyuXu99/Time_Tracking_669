import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { getDataModel } from './DataModel';


function AddActivity({ navigation }) {


  const colors = ['red', 'blue', 'yellow', 'purple','green'];

  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState(colors[0]);


  
  let dataModel = getDataModel();
    
    return (
        <View style={styles.container}>

          <View style={styles.activityContainer}>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Task</Text>
              <Input  
                placeholder=" Add new task"
                onChangeText={(text)=>setInputText(text)}
                value={inputText}
              />
            </View>

            <View style={styles.prioritySelectionContainer}>
              <Text style={styles.label}>Tag Color</Text>
              <View style={styles.colorContainer}>
                  {
                      colors.map((item)=>(
                          <View style={styles.colorCell}>
                              <TouchableOpacity
                                    onPress={() => {
                                      setColor(item);}}
                                    style={{
                                      width: 30,
                                      height: 30,
                                      borderRadius: 30,
                                      backgroundColor: item,
                                      borderWidth: 5,
                                      borderColor: item===color?'grey': 'white',
                                    }}>
                              </TouchableOpacity>
                          </View>
                      ))
                  }

                {/*<FlatList */}
                {/*  contentContainerStyle={styles.prioritySelectionContentContainer}*/}
                {/*  data={colors}*/}
                {/*  renderItem={({item})=>{*/}
                {/*    return (*/}
                {/*      <TouchableOpacity*/}
                {/*      onPress={() => {*/}
                {/*        setColor(item);}}*/}
                {/*      style={{*/}
                {/*        width: 30,*/}
                {/*        height: 30,*/}
                {/*        borderRadius: 30,*/}
                {/*        backgroundColor: item,*/}
                {/*        borderWidth: 5,*/}
                {/*        borderColor: item===color?'grey': 'white',*/}
                {/*      }}>*/}
                {/*      </TouchableOpacity>*/}
                {/*    );*/}
                {/*  }}*/}
                {/*/>*/}
              </View>
            </View>
                
            
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                dataModel.addItem({text: inputText, time: 0});
            }}>
              <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                navigation.navigate("Home");
            }}>
            <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      fontFamily: 'Rubik',
    },
    activityContainer: {
      flex: 0.6,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: 'yellow',

    },
    buttonContainer: {
      flex: 0.4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      // backgroundColor: 'yellow'
    },
    inputContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      marginTop: 40,
      marginHorizontal: 40,
      backgroundColor: 'red',
    },
    label: {
      // flex: 1,
      paddingLeft: 10,
      fontSize: 20,
      fontWeight: '500',
      letterSpacing: 0.5,
    },
    button1: {
      alignItems: "center",
      backgroundColor: "#CCE5FD",
      padding: 20,
      width: '60%',
      marginBottom: '10%',
      marginTop: '10%',
      borderRadius: 10,
    },
    button2: {
      alignItems: "center",
      backgroundColor: "#E8EAFE",
      padding: 20,
      width: '60%',
      marginBottom: '10%',
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '500',
      letterSpacing: 0.5,
    },
    prioritySelectionContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'space-around',
      // alignItems: 'flex-start',
      marginTop: 40,
      marginHorizontal: 40,
      backgroundColor: 'grey',
    },
    prioritySelectionContentContainer: {
      // flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    colorContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    colorCell: {
        flex: 0.2,
    }


 
  });
  
  export default AddActivity;