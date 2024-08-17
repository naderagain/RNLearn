import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Nadertest from '../../components/Nadertest'
import {s} from "./App.Style"
import { ProfileCard } from './ProfileCard'


// you are importing 2 components: 
// npm i 
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context"
export default function index(){

    return (

          <SafeAreaProvider>
           <SafeAreaView style = {{ flexDirection: 'column', justifyContent: "center"   }}>
           
           <ProfileCard/>

           </SafeAreaView>
          </SafeAreaProvider>
          
          
 
      );


     
}

export const d = StyleSheet.create({

  box1: {height: 100, width: 100, backgroundColor: "red"},
  box2: {height: 100, width: 100, backgroundColor: "green"},
  box3: {height: 100, width: 100, backgroundColor: "blue"}

})
