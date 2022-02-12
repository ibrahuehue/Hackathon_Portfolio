import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";
import { SocialIcon } from "react-native-elements";
import { Video } from "expo-av";

const Home = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View>
      <View
        style={{
          backgroundColor: "#101D30",
          borderBottomEndRadius: 120,
          borderBottomStartRadius: 120,
          height: 400,
          width: "100%",
        }}
      >
        <Image
          source={require("../../assets/photo-1534528741775-53994a69daeb.jpg")}
          style={{
            height: 120,
            width: 120,
            alignSelf: "center",
            marginTop: 130,
            borderRadius: 60,
          }}
        ></Image>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 5,
            fontSize: 20,
            color: "white",
          }}
        >
          Amanda
        </Text>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 5,
            fontSize: 16,
            color: "white",
          }}
        >
          Photographer / Artist
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            color: "white",
          }}
        >
          <SocialIcon
            style={{ alignSelf: "center", marginTop: 20 }}
            type="twitter"
          />
          <SocialIcon
            style={{ alignSelf: "center", marginTop: 20 }}
            type="instagram"
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            alignSelf: "flex-start",
            marginStart: 20,
            marginTop: 20,
            fontSize: 24,
          }}
        >
          About me
        </Text>

        <Text
          style={{
            alignSelf: "flex-start",
            marginStart: 20,
            margin: 10,
            fontSize: 16,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus
          ante at lorem efficitur aliquam. Nunc facilisis vulputate neque eu
          gravida. adipiscing elit. Aenean luctus ante at lorem efficitur
          aliquam. Nunc facilisis vulputate neque eu gravida{" "}
        </Text>
      </View>
      <View>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://cdn.videvo.net/videvo_files/video/free/2012-07/large_watermarked/Countdown%20Timer_preview.mp4",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
