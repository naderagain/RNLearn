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
           <SafeAreaView style = {{backgroundColor: "red", flex: 1   }}>
            <View style={{backgroundColor: "blue" , flex: 1 }}  />
            <View style={{backgroundColor: "green" , flex: 1 }}  />
            <View style={{}}  />

           </SafeAreaView>
          </SafeAreaProvider>
          
          
 
      )


     
}

