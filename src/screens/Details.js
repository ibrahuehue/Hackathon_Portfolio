import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Details({ route }) {
  const { src, takenAt, description, PhotoTitle } = route.params;
  return (
    <View style={{ backgroundColor: "#ffffef", height: "100%" }}>
      <Image
        source={src}
        style={{
          height: "50%",
          width: "99%",
          alignSelf: "center",
          margin: 10,
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          alignSelf: "center",
          marginStart: 20,
          marginTop: 20,
          fontSize: 20,
        }}
      >
        {PhotoTitle}
      </Text>
      <Text
        style={{
          alignSelf: "flex-start",
          marginStart: 20,
          marginTop: 20,
          fontSize: 20,
        }}
      >
        Location
      </Text>
      <Text
        style={{
          alignSelf: "flex-start",
          marginStart: 40,
          marginTop: 10,
          marginRight: 20,
          fontSize: 16,
        }}
      >
        This photograph was taken at {takenAt}
      </Text>
      <Text
        style={{
          alignSelf: "flex-start",
          marginStart: 20,
          marginTop: 20,
          fontSize: 20,
        }}
      >
        Description
      </Text>
      <Text
        style={{
          alignSelf: "flex-start",
          marginStart: 40,
          marginTop: 10,
          marginRight: 20,
          fontSize: 16,
        }}
      >
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
