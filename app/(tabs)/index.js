import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Nadertest from '../../components/Nadertest'

// you are importing 2 components: 
// npm i 
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context"
export default function index(){

    return (


          <>  


          <SafeAreaProvider>
            <SafeAreaView>

            <Text  style = { s.title  }   >inasdffdsdex</Text>
          <Nadertest></Nadertest>
          <Text>index</Text>


            </SafeAreaView>
          </SafeAreaProvider>
          
          

          </>
      )


     
}

const s = StyleSheet.create({
    title: {
        color: "red"
    }
})