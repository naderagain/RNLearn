import { TouchableOpacity, View, Text, Image } from "react-native";
import { s } from "./ProfilCard.style";
export function ProfileCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
      </View>

      <View>
        <Text  style={s.name} >asfasfsdfafasfafds</Text>
        <Text>asfasfsdfafasfafds</Text>
      </View>
    </View>
  );
}
