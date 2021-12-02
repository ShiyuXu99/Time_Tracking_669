import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { useStopwatch } from 'react-timer-hook';
import { Header } from 'react-native/Libraries/NewAppScreen';


function Timer({ navigation }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> */}
        <Button
          onPress={() => {
            navigation.navigate("Home");
          }}
          title="Go Back"
          color="black"
        />
      </View>

      <View style={styles.timeCell}>
        <Text style={{ fontSize: 40 }}>
          
        {days}:{hours}:{minutes}:{seconds} 
        </Text>

      </View>


      <View style={styles.buttonCell}>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.purplebutton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text>Press Here</Text>
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
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },
  timeCell: {
    flex: 0.5,
  },
  buttonCell: {
    flex: 0.4,
    alignItems: 'center',
    paddingTop: '10%',

  },
  button: {
    alignItems: "center",
    backgroundColor: "#CCE5FD",
    padding: 15,
    width: '60%',
    marginBottom: '10%',
    marginTop: '20%',
    borderRadius: 10,
  },
  purplebutton: {
    alignItems: "center",
    backgroundColor: "#E8EAFE",
    padding: 15,
    width: '60%',
    marginBottom: '10%',
    borderRadius: 10,
  }


});

export default Timer;