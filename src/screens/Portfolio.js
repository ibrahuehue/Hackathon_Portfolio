import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Portfolio() {
  const navigation = useNavigation();
  const SingleImage = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(data);
          navigation.navigate("Details", data);
        }}
      >
        <Image
          source={data.src}
          style={{
            height: 120,
            width: "99%",
            alignSelf: "center",
            margin: 10,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <SingleImage
        data={{
          takenAt: "Kuwait",
          PhotoTitle: "Angels",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis vulputate neque eu gravida. Morbi ut sodales metus, id porttitor ante. Nullam lobortis nisi arcu, nec varius tellus porttitor eget. Nam magna turpis, pulvinar et purus a, viverra semper mi. Nam faucibus vitae arcu non iaculis. Proin quis ex neque",
          src: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
        }}
      />
      <SingleImage
        data={{
          takenAt: "Kuwait City",
          PhotoTitle: "image 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis vulputate neque eu gravida. Morbi ut sodales metus, id porttitor ante. Nullam lobortis nisi arcu, nec varius tellus porttitor eget. Nam magna turpis, pulvinar et purus a, viverra semper mi. Nam faucibus vitae arcu non iaculis. Proin quis ex neque",
          src: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
        }}
      />
      <SingleImage
        data={{
          takenAt: "Germany",
          PhotoTitle: "image 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis vulputate neque eu gravida. Morbi ut sodales metus, id porttitor ante. Nullam lobortis nisi arcu, nec varius tellus porttitor eget. Nam magna turpis, pulvinar et purus a, viverra semper mi. Nam faucibus vitae arcu non iaculis. Proin quis ex neque",
          src: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
        }}
      />

      <SingleImage
        data={{
          takenAt: "Kuwait",
          PhotoTitle: "image 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis vulputate neque eu gravida. Morbi ut sodales metus, id porttitor ante. Nullam lobortis nisi arcu, nec varius tellus porttitor eget. Nam magna turpis, pulvinar et purus a, viverra semper mi. Nam faucibus vitae arcu non iaculis. Proin quis ex neque",
          src: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
        }}
      />
      <SingleImage
        data={{
          takenAt: "The United states of America",
          PhotoTitle: "image 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis vulputate neque eu gravida. Morbi ut sodales metus, id porttitor ante. Nullam lobortis nisi arcu, nec varius tellus porttitor eget. Nam magna turpis, pulvinar et purus a, viverra semper mi. Nam faucibus vitae arcu non iaculis. Proin quis ex neque",
          src: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
        }}
      />
      <SingleImage
        data={{
          takenAt: "India",
          PhotoTitle: "image 6 ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis vulputate neque eu gravida. Morbi ut sodales metus, id porttitor ante. Nullam lobortis nisi arcu, nec varius tellus porttitor eget. Nam magna turpis, pulvinar et purus a, viverra semper mi. Nam faucibus vitae arcu non iaculis. Proin quis ex neque",
          src: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
