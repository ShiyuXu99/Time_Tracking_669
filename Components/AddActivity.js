import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { getDataModel } from './DataModel';


function AddActivity({ navigation }) {


  const colors = ['#87b9e7', '#F29C98', '#A990DD', '#91cec2','#ffe0ab'];

  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState(colors[0]);


  
  let dataModel = getDataModel();
    
    return (
        <View style={styles.container}>

          <View style={styles.activityContainer}>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Task</Text>
              <Input  style={styles.inputText}
                placeholder=" Add new task"
                onChangeText={(text)=>setInputText(text)}
                value={inputText}
              />
            </View>

            <View style={styles.colorSelectionContainer}>
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
                                      borderColor: item===color?'#E5E5E5': 'white',
                                    }}>
                              </TouchableOpacity>
                          </View>
                      ))
                  }

              </View>
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                dataModel.addItem({text: inputText, time: 0, color: {color}});
                navigation.navigate("Home");
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
      marginVertical: 40,
      flex: 1.2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

    },
    buttonContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    inputContainer: {
      height: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      marginHorizontal: 40,
    },
    inputText: {
     fontSize: 18,
    },
    label: {
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
    colorSelectionContainer: {
      height: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginTop: 40,
      marginHorizontal: 40,
    },
    colorContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },


 
  });
  
  export default AddActivity;