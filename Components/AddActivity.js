import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { getDataModel } from './DataModel';
import { Icon } from 'react-native-elements';


function AddActivity({ navigation }) {


  const icons = {dict: {'desktop-outline': ['#F78F8A', 'Work'], 'game-controller-outline': ['#B47CFC', 'Game'], 'barbell-outline': ['#5EA8EC', 'Workout'], 'paw-outline': ['#4AC2AA', 'Pet'], 'color-palette-outline': ['#FCC089', 'Art'],
  'bed-outline': ['#F46972', 'Sleep'], 'restaurant-outline': ['#D0DD84', 'Food'], 'library-outline': ['#7AD3DA', 'Study'], 'people-outline': ['#DEBD9C', 'Social'], 'ellipsis-horizontal-outline': ['#CDCDCD','Others']}}

  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState(icons.dict['game-controller-outline']);
  const [icon, setIcon] = useState('game-controller-outline');
  const [iconLabel, setIconLabel] = useState('Work');


  
  let dataModel = getDataModel();
    
    return (
        <View style={styles.container}>

          <View style={styles.activityContainer}>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Task</Text>
              < Input  style={styles.inputText}
                placeholder=" Add new task"
                placeholderTextColor='#B7B7B7'
                onChangeText={(text)=>setInputText(text)}
                inputContainerStyle={styles.underline}
                value={inputText}
                inputStyle={styles.inputText}
              />
            </View>

            <View style={styles.selectionContainer}>
              <Text style={styles.label}>Category</Text>

              <View style={styles.selectContentContainer}>
                  {
                      Object.keys(icons.dict).map((item)=>(
                          <View style={styles.colorCell}>
                              <TouchableOpacity
                                onPress={() => {
                                  setIcon(item);
                                  setColor(icons.dict[item][0]);
                                  setIconLabel(icons.dict[item][1])}}
                                style={{
                                  display: 'flex',
                                  justifyContent:'center',
                                  alignItems: 'center',
                                  width: 55,
                                  height: 55,
                                  borderRadius: 55,
                                  borderWidth: 5,
                                  backgroundColor: icons.dict[item][0],
                                  borderColor: item===icon?'#6F6FF8': 'white',
                                }}>
                                <Icon name={item}
                                    type='ionicon'
                                    color='white'
                                  />
                              </TouchableOpacity>
                                <Text style={styles.iconLabel}>{icons.dict[item][1]}</Text>
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
                dataModel.addItem({text: inputText, time: 0, color: color, icon: icon, label: iconLabel});
                setInputText('');
                setIcon('desktop-outline');
                navigation.navigate("Home");
            }}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                setInputText('');
                setIcon('desktop-outline');
                navigation.navigate("Home");
            }}>
            <Text style={styles.buttonText}>Cancel</Text>
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
    marginTop: 60,
    flex: 2.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },
  buttonContainer: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  inputContainer: {
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  inputText: {
    paddingHorizontal: 5,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  underline: {
    borderColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#F6F6F6'
   },
  label: {
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#6F6FF8",
    padding: 20,
    width: '40%',
    borderRadius: 10,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#B7B7B7",
    padding: 20,
    width: '40%',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
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
    width: '25%',
    marginBottom: 15,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
    letterSpacing: 0.5,
    marginTop:5,
  }


 
  });
  
  export default AddActivity;