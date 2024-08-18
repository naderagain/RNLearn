
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'


export function AgeCounter(){


    let age = 30;

    function increaseAge(){

        age++;
    }


    return <>


<TouchableOpacity style = {{
    width: 40,
    backgroundColor: "#0000FF" }}   >
    <Text>Increase age</Text>
</TouchableOpacity>
<Text>Increase age</Text>
          

        </>
}