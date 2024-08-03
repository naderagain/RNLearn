import { View, Text } from "react-native";
import React from "react";
// A component always start with a function and make sure method name is capital
// u need to also write export because you wnt to use it outside
export default function Nadertest() {
  return (
    <>
      <Text>Hello i am condicu</Text>
      <TouchableOpacity>
        <Text>Touch me</Text>
      </TouchableOpacity>
    </>
  );
}
