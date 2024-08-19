import { StyleSheet, View, Text, Alert } from 'react-native'
import React from 'react'
import Nadertest from '../../components/Nadertest'
import {s} from "./App.Style"
import { ProfileCard } from './ProfileCard'
import { AgeCounter } from './AgeCounter'


// you are importing 2 components: 
// npm i 
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context"
export default function index(){


  function hello(){
Alert.alert("Helo")

  }



    return (

          <SafeAreaProvider>
           <SafeAreaView >
           
       
       <ProfileCard  onPressTitle={hello}   />

           </SafeAreaView>
          </SafeAreaProvider>
            
          
 
      );


     
}

export const d = StyleSheet.create({

  box1: {height: 100, width: 100, backgroundColor: "red"},
  box2: {height: 100, width: 100, backgroundColor: "green"},
  box3: {height: 100, width: 100, backgroundColor: "blue"}

})
