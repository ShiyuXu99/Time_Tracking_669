import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { getDataModel } from './DataModel';


function AddActivity({ navigation }) {

  const colors = ['red','green', 'blue']

  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState(colors[0]);
  
  let dataModel = getDataModel();
    
    return (
        <View style={styles.container}>

          <View style={styles.activityContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Task:</Text>
              <Input  
                containerStyle={styles.inputBox} 
                placeholder=" Add new task"
                onChangeText={(text)=>setInputText(text)}
                value={inputText}
              />
            </View>

            {/* <View style={styles.colorSelectionContainer}>
              <Text style={styles.colorLabel}>Lable Color:</Text>
              <FlatList 
              contentContainerStyle={styles.colorSelectionContainer}
                data={colors}
                renderItem={({item})=>{
                  return (
                    <TouchableOpacity
                      style={styles.colorbutton}
                      backgroundColor={item}
                      onPress={() => {
                        setColor(item);}}
                      borderColor={item===color?'purple': 'white'}>
                    </TouchableOpacity>
                    // <Button 
                    //   text=
                    //   onPress={()=>{
                    //     setColor(item)
                    //   }}
                    //   bordercolor={item===priority?'purple': 'white'}
                    // />
                  );
                }}
                keyExtractor={(item, index)=>item}
              />
            </View> */}

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
      flex: 0.3,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: 40,
    },
    inputLabel: {
      flex: 1,
      paddingLeft: 10,
      fontSize: 18,
    },
    inputBox: {
      flex: 1,
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
    // button2: {
    //   alignItems: "center",
    //   width: 40,
    //   height: 40,
    //   borderRadius: 20,
    // },


 
  });
  
  export default AddActivity;