import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import Timer from './Components/Timer';
import DataPage from './Components/DataPage';
import AddActivity from './Components/AddActivity';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import TaskDetail from './Components/TaskDetail';

const Stack = createNativeStackNavigator();

// export default function App() {
//   const Tab = createBottomTabNavigator();
  
//   return (
//     <NavigationContainer>
      
//     </NavigationContainer>
//   );
// }


// export default App;


const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Timer" component={Timer} />
//     </Tab.Navigator>
//   );
// }

export function HomeScreenStack() {
  return (
    // <NavigationContainer>
      <Tab.Navigator 
    
      tabBarOptions={{ showLabel: false }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'New Task') {
              iconName = 'plus-circle'
            } else if (route.name === 'Data Page') {
              iconName = 'pie-chart'
            }
            // You can return any component that you like here!
            return <Feather name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: '#5258E4',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="New Task" component={AddActivity} />
        <Tab.Screen name="Data Page" component={DataPage} />

      </Tab.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen 
            name="Home" 
            component={HomeScreenStack}
            options={{ title: 'Time_Tracking_669' }}/>
        <Stack.Screen name="Timer" component={Timer} />

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="TaskDetail" component={TaskDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

