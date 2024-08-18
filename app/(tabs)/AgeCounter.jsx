
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'


export function AgeCounter(){


    let age = 30;

    function increaseAge(){

        age++;
        console.log(age);
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