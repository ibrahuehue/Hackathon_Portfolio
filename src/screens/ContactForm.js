import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import axios from "axios";

const ContactForm = () => {
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, margin: 12, marginTop: 50 }}>
        Contact Form
      </Text>
      <TextInput
        style={{
          height: 50,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          marginTop: 25,
        }}
        onChangeText={onChangeText}
        placeholder="Enter Name"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        placeholder="Email"
        value={text1}
      />
      <TextInput
        style={{
          height: 100,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
        }}
        onChangeText={onChangeText2}
        placeholder="Description"
        value={text2}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("HERE");

          const api = axios.create({
            baseURL: "http://192.168.156.184:8888",
            timeout: 5000,
          });
          const payload = {
            name: text,
            email: text1,
            description: text2,
          };
          api.post("/auth/send/email", payload);
        }}
      >
        <Text style={{ fontSize: 18 }}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 12,
    borderRadius: 10,
  },
});
