
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'


export function AgeCounter(){


    //let age = 30;
const[age, setAge] = useState(30) // 30 is the default value


    function increaseAge(){

        //age++;
        //console.log(age);

       setAge(age + 1)
    }


    return <>


<TouchableOpacity 
  onPress={increaseAge}
style = {{
    width: 60,
    backgroundColor: "#0000FF" }}   >
    <Text>Increase age</Text>
</TouchableOpacity>
<Text>Increase age {age}  </Text>
          

        </>
}