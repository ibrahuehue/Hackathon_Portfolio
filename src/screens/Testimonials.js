import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "ibrahim",
          image: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis ",
        },
        {
          title: "Aziz",
          image: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis ",
        },
        {
          title: "Abdul",
          image: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis ",
        },
        {
          title: "Khaled",
          image: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis ",
        },
        {
          title: "Jassem",
          image: require("../../assets/photo-1534528741775-53994a69daeb.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante at lorem efficitur aliquam. Nunc facilisis ",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "#101D30",
          borderRadius: 5,
          height: 250,
          padding: 20,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Image
          source={item.image}
          style={{
            height: 120,
            width: 120,
            alignSelf: "center",
          }}
        ></Image>
        <Text style={{ fontSize: 24, color: "white" }}>{item.title}</Text>
        <Text style={{ color: "white" }}>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{ flexGrow: 1, backgroundColor: "#FFFFf7", paddingTop: 50 }}
      >
        <View style={{ flex: 2 }} />

        <View style={{ flexGrow: 1, flexDirection: "row" }}>
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>

        <View style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
