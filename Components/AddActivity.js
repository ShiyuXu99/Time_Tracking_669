import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { getDataModel } from './DataModel';
import { Icon } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen';


function AddActivity({ navigation }) {


  const colors = ['#87b9e7', '#F29C98', '#A990DD', '#91cec2', '#ffe0ab'];
  // const icons = ['game-controller-outline', 'desktop-outline', 'barbell-outline', 'paw-outline', 'color-palette-outline', 'bed-outline','restaurant-outline', 'library-outline', 'people-outline', 'ellipsis-horizontal-outline']
  const icons = {dict: {'game-controller-outline': '#8962F8', 'desktop-outline': '#F78F8A', 'barbell-outline': '#5EA8EC', 'paw-outline': '#4AC2AA', 'color-palette-outline': '#FCC089',
  'bed-outline': '#F46972', 'restaurant-outline': '#D0DD84', 'library-outline': '#7AD3DA', 'people-outline': '#DEBD9C', 'ellipsis-horizontal-outline': '#CDCDCD',}}

  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState(icons.dict['game-controller-outline']);
  // const [icon, setIcon] = useState(icons[0]);
  const [icon, setIcon] = useState('game-controller-outline');


  
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

            {/* <View style={styles.selectionContainer}>
              <Text style={styles.label}>Tag Color</Text>

              <View style={styles.selectContentContainer}>
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
                                      borderColor: item===color?'#F0F0F0': 'white',
                                    }}>
                              </TouchableOpacity>
                          </View>
                      ))
                  }
              </View>
            </View> */}

            <View style={styles.selectionContainer}>
              <Text style={styles.label}>Category</Text>

              <View style={styles.selectContentContainer}>
                  {
                      Object.keys(icons.dict).map((item)=>(
                          <View style={styles.colorCell}>
                              <TouchableOpacity
                                onPress={() => {
                                  setIcon(item);
                                  setColor(icons.dict[item])}}
                                style={{
                                  display: 'flex',
                                  justifyContent:'center',
                                  alignItems: 'center',
                                  width: 55,
                                  height: 55,
                                  borderRadius: 55,
                                  borderWidth: 5,
                                  backgroundColor: icons.dict[item],
                                  borderColor: item===icon?'#E9E9FF': 'white',
                                }}>
                                <Icon name={item}
                                    type='ionicon'
                                    color='white'
                                  />
                              </TouchableOpacity>
                          </View>
                      ))
                  }
              </View>
            </View>

            {/* <View style={styles.selectionContainer}>
              <Text style={styles.label}>Icon</Text>

              <View style={styles.selectContentContainer}>
                  {
                      icons.map((item)=>(
                          <View style={styles.colorCell}>
                              <TouchableOpacity
                                onPress={() => {
                                  setIcon(item);}}
                                style={{
                                  display: 'flex',
                                  justifyContent:'center',
                                  alignItems: 'center',
                                  width: 40,
                                  height: 40,
                                  borderRadius: 40,
                                  backgroundColor: item===icon?'#F0F0F0': 'white',
                                }}>
                                <Icon name={item}
                                    type='ionicon'
                                    color='black'
                                  />
                              </TouchableOpacity>
                          </View>
                      ))
                  }
              </View>
            </View> */}

          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                dataModel.addItem({text: inputText, time: 0, color: color, icon: icon});
                setInputText('');
                setIcon('game-controller-outline');
                navigation.navigate("Home");
            }}>
              <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                setInputText('');
                setIcon('game-controller-outline');
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
      marginBottom: 60,
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
      height: '30%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      marginHorizontal: 40,
      marginVertical: 10,
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
    selectionContainer: {
      height: '30%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginHorizontal: 40,
      marginVertical: 10,
    },
    selectContentContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      // justifyContent: 'space-around',

    },
    colorCell: {
      width: '20%',
      height: '100%',
      borderRadius: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }


 
  });
  
  export default AddActivity;