import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Nadertest from '../../components/Nadertest'
import {s} from "./App.Style"

// you are importing 2 components: 
// npm i 
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context"
export default function index(){

    return (


         


          <SafeAreaProvider>
            <SafeAreaView style = {{backgroundColor: "Red" , flex: 1}}>

            <Text  style = { s.title  }   >inasdffdsdex</Text>
            <View style = {s.square}>

                <Text>Super!</Text>


            </View>

          <Nadertest></Nadertest>
          <Text>index</Text>


            </SafeAreaView>
          </SafeAreaProvider>
          
          
 
      )


     
}

