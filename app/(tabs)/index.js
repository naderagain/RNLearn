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
            <SafeAreaView style = {{ flex: 1, justifyContent: "center" , padding: 20  }}>

        
            <ProfileCard  firstName = {"Nadier"}  lastName = {"Nadier"}    />
           


            </SafeAreaView>
          </SafeAreaProvider>
          
          
 
      )


     
}

