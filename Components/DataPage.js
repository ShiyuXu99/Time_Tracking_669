import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function DataPage({ navigation }) {
    
    return (
        <View style={styles.container}>
                <Text>Hello</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontFamily: 'Rubik',
    }

 
  });
  
  export default DataPage;