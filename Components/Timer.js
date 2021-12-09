import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image } from "react-native";
import { useStopwatch } from 'react-timer-hook';
import { getDataModel } from './DataModel';

function Timer({ navigation, route }) {
  let dataModel = getDataModel();
  const item = route.params.item;
  const [time, setTime] = useState(item.time);
  const stopwatchOffset = new Date(); stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + time);

  let {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true , offsetTimestamp:stopwatchOffset});
  const [pauseStatus, setPauseStatus] = useState(false)

  useEffect(()=>{
      console.log(time)
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          {/*<Button*/}
          {/*    onPress={() => {*/}
          {/*      navigation.navigate("Home");*/}
          {/*    }}*/}
          {/*    title=" Go Back"*/}
          {/*    color="black"*/}
          {/*/>*/}
        </View>
      </View>

      <View style={styles.timeCell}>
          <View style={styles.imageCell}>
            <Image style={styles.imageCell} source={require('./image/loop.gif')} />
          </View>

          <Text style={styles.timeText}>
            {hours}:{minutes}:{seconds}
          </Text>
      </View>

      <View style={styles.buttonCell}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            pauseStatus? start() : pause();
            setPauseStatus(!pauseStatus);
          }}
        >
          <Text style={styles.buttonText}>{pauseStatus? 'Start':'Pause'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.purplebutton}
          onPress={() => {
            let tempTime = hours*3600 + minutes*60 + seconds;
            console.log(tempTime)
            dataModel.updateTime(item.key, {text: item.text, time: tempTime, icon: item.icon, color: item.color});
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Finish</Text>
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
  header: {
    flexDirection: 'column',
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  timeCell: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCell: {
    flex: 0.4,
    alignItems: 'center',
    paddingTop: '10%',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#71BBFF",
    padding: 20,
    width: '60%',
    marginBottom: '10%',
    marginTop: '20%',
    borderRadius: 10,
  },
  purplebutton: {
    alignItems: "center",
    backgroundColor: "#6F6FF8",
    padding: 20,
    width: '60%',
    marginBottom: '10%',
    borderRadius: 10,
  },
  timeText: {
    marginTop: '5%',
    fontSize: 50,
  },
  imageCell: {
    flex: 1,
    width:'80%',
    paddingLeft: '10%'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    letterSpacing: 0.5,
  },


});

export default Timer;