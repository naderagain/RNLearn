import { TouchableOpacity, View, Text, Image } from "react-native";
import { s } from "./ProfilCard.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
//import { FontAwesome } from "@expo/vector-icons";

export function ProfileCard({
  onPressTitle,
  firstName,
  lastName,
  children,
  age,
  isHappy,
  isBored,
}) {
  function greetings() {
    "asdfafasdfsadf";
  }

function onPressTitle_(){
  onPressTitle(firstName + "  " + lastName)
}

  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>


        <TouchableOpacity onPress={onPressTitle_ } >
          <Text style={s.name}>
            {" "}
            {firstName} {lastName}{" "}
          </Text>
        </TouchableOpacity>



          <Text>
            {greetings()}
            Hi I am React native developer {children} , let's get in touch, and
            soon
          </Text>
        </View>
      </View>

      <View style={s.social}>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>

        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>

        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
