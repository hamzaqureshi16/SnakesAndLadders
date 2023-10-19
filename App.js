import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Button,
} from "react-native";
import Playground from "./Screens/Playground";
const App = () => {
  return (
    <>
      <Playground />
      {/* <ImageBackground
        source={require("./assets/Images/SnakesLaddersBoard.jpg")}
        style={{ height: 600 }}
      >
        <Image
          source={require("./assets/Images/player.png")}
          style={[styles.playerImage, { left: 50, top: 527 }]}
        ></Image>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity title="Click to throw dice" style={styles.button}>
          <Text>Throw the Dice</Text>
        </TouchableOpacity>
        <Text> You got {6}</Text>
      </View> */}
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "lightgreen",
    marginLeft: 5,
  },
  playerImage: {
    width: 20,
    height: 30,
    position: "absolute",
  },
});
export default App;
