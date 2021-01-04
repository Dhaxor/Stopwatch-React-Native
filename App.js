import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import useTimer from './src/hooks/useTimer';
import { formatTime } from './src/utils';
export default function App() {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(timer)}</Text>
       <View style={styles.buttonContainer}>
         {
          !isActive && !isPaused ?
          
         <Button
         onPress= {handleStart}
         title="Start"
         color="#841584"
         /> : ( isPaused ?
          <Button
         onPress= {handlePause}
         title="Pause"
         /> :
          <Button
         onPress= {handleResume}
         title="Resume"
         />
         )
           }
          <Button
         onPress={handleReset}
         title="Reset"
         color="#03396c"
         />

       </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011f4b',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    
  },
  time:{
    color: 'white',
    position: 'relative',
    left: 160,
    bottom: 100,
    fontSize: 20

  },
  buttonContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
    
  },
  startButton:{
    backgroundColor: '#005b96',
  },
});
