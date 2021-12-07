import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { getDataModel } from './DataModel';
import { Icon } from 'react-native-elements'

function TaskDetail({ navigation, route }) {

  const item = route.params.task;

  const icons = {dict: {'game-controller-outline': '#B47CFC', 'desktop-outline': '#F78F8A', 'barbell-outline': '#5EA8EC', 'paw-outline': '#4AC2AA', 'color-palette-outline': '#FCC089',
  'bed-outline': '#F46972', 'restaurant-outline': '#D0DD84', 'library-outline': '#7AD3DA', 'people-outline': '#DEBD9C', 'ellipsis-horizontal-outline': '#CDCDCD',}}

  const [inputText, setInputText] = useState(item.text);
  const [color, setColor] = useState(item.color);
  const [icon, setIcon] = useState(item.icon);
  // const [hour, setHour] = useState('');
  // const [min, setMin] = useState('');
  // const [sec, setSec] = useState('');
  const [timeStr, setTimeStr] = useState(item.time)

  let dataModel = getDataModel();

  let getTime = (time)=>{
    let date = new Date(null);
    date.setSeconds(time); // specify value for SECONDS here
    let result = date.toISOString().substr(11, 8);
      return result;
  }

  let handleTime = ()=>{
      let timeL = timeStr.split(':')
      for (let i = 0; i < timeL.length; i++){
          if(timeL[i] === '00'){
              timeL[i] = 0;
          }
          else{
              timeL[i] = parseInt(timeL[i],10);
          }
      }
      // let hour = timeL[0];
      // let min = timeL[1];
      // let sec = timeL[2]
      return timeL[0]*3600 + timeL[1]*60 + timeL[2];
  }

    useEffect(()=>{
        let temTime = getTime(item.time);
        setTimeStr(temTime)
    },[])

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

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Time</Text>
            <Input style={styles.inputText}
              placeholder=" Enter time in 00:00:00"
                   onChangeText={(time)=>setTimeStr(time)}
                   value={timeStr}
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
                              borderColor: item===icon?'#6F6FF8': 'white',
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



        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              dataModel.updateItem(item.key, {text: inputText, time: handleTime(), color: color, icon: icon});
              navigation.navigate("Home");
          }}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              setInputText('');
              setIcon('game-controller-outline');
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
        marginTop: 100,
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
  
      },
      buttonContainer: {
        flex: 1,
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
       fontSize: 18,
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
        marginBottom: '10%',
        borderRadius: 10,
      },
      button2: {
        alignItems: "center",
        backgroundColor: "#B7B7B7",
        padding: 20,
        width: '40%',
        marginBottom: '10%',
        borderRadius: 10,
      },
      buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
        letterSpacing: 0.5,
      },
      selectionContainer: {
        height: '25%',
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
    
    export default TaskDetail;