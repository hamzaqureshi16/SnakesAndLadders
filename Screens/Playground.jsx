import React, { useState, useEffect } from "react";
import { Button } from "react-native-paper";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import { Image } from "react-native";
import SnakesAndLaddersImg from "../assets/Images/SnakesLaddersBoard.jpg";
import Player from "../assets/Images/player.png";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Playground = () => {
  const [die, setDie] = useState(null);
  const [cell, setCell] = useState(0);
  const [cells, setCells] = useState([
    {
      id: 0,
      coordinates: { x: 840, y: 60 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 1,
      coordinates: { x: 840, y: 190 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 2,
      coordinates: { x: 840, y: 320 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 3,
      coordinates: { x: 840, y: 460 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 4,
      coordinates: { x: 840, y: 590 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 5,
      coordinates: { x: 710, y: 590 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 6,
      coordinates: { x: 710, y: 460 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 7,
      coordinates: { x: 710, y: 320 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 8,
      coordinates: { x: 710, y: 190 },
      isSnakeHead: false,
      isLadderBottom: true,
      to: 11,
    },
    {
      id: 9,
      coordinates: { x: 710, y: 60 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 10,
      coordinates: { x: 580, y: 60 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 11,
      coordinates: { x: 580, y: 190 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 12,
      coordinates: { x: 580, y: 320 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 13,
      coordinates: { x: 580, y: 460 },
      isSnakeHead: true,
      isLadderBottom: false,
      to: 1,
    },
    {
      id: 14,
      coordinates: { x: 580, y: 590 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 15,
      coordinates: { x: 450, y: 590 },
      isSnakeHead: false,
      isLadderBottom: true,
      to: 26,
    },
    {
      id: 16,
      coordinates: { x: 450, y: 460 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 17,
      coordinates: { x: 450, y: 320 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 18,
      coordinates: { x: 450, y: 190 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 19,
      coordinates: { x: 450, y: 60 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 20,
      coordinates: { x: 320, y: 60 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 21,
      coordinates: { x: 320, y: 190 },
      isSnakeHead: false,
      isLadderBottom: true,
      to: 31,
    },
    {
      id: 22,
      coordinates: { x: 320, y: 320 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 23,
      coordinates: { x: 320, y: 460 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 24,
      coordinates: { x: 320, y: 590 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 25,
      coordinates: { x: 190, y: 590 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 26,
      coordinates: { x: 190, y: 460 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 27,
      coordinates: { x: 190, y: 320 },
      isSnakeHead: true,
      isLadderBottom: false,
      to: 16,
    },
    {
      id: 28,
      coordinates: { x: 190, y: 190 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 29,
      coordinates: { x: 190, y: 60 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 30,
      coordinates: { x: 60, y: 60 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 31,
      coordinates: { x: 60, y: 190 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 32,
      coordinates: { x: 60, y: 320 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
    {
      id: 33,
      coordinates: { x: 60, y: 460 },
      isSnakeHead: true,
      isLadderBottom: false,
      to: 18,
    },
    {
      id: 34,
      coordinates: { x: 60, y: 590 },
      isSnakeHead: false,
      isLadderBottom: false,
      to: 0,
    },
  ]);

  const rollDie = () => {
    const newDie = Math.floor(Math.random() * 6) + 1;
    setDie(newDie);

    if (cell + newDie < 34) {
      setCell(cell + newDie);
    } else {
      alert("You won the game");
      setCell(0);
    }

    checkConstraints();
  };

  const checkConstraints = () => {
    if (cells[cell].isSnakeHead || cells[cell].isLadderBottom) {
      setCell(cells[cell].to);
      if (cells[cell].isSnakeHead) {
        alert("You got bitten by a snake");
      } else {
        alert("You climbed a ladder");
      }
    }
  };

  useEffect(() => {
    console.log("meow");
  }, [cell, die]);

  return (
    <>
      <ImageBackground
        source={SnakesAndLaddersImg}
        resizeMode="cover"
        style={[
          styles.image,
          { width: "130%" },
          { height: "125%" },
          { transform: [{ scale: 0.6 }] },
          { marginLeft: -110 },
        ]}
      >
        <Image
          source={Player}
          style={{
            width: 60,
            height: 95,
            borderRadius: 50,
            position: "absolute",
            top: cells[cell].coordinates.x,
            left: cells[cell].coordinates.y,
          }}
        ></Image>
      </ImageBackground>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => {
            rollDie();
            // setCell(cell + die);
          }}
          style={styles.button}
        >
          <Text style={{ color: "black" }}>
            Roll Dice <FontAwesome5 name="dice" size={20} color="black" />
          </Text>
        </Button>
        <Text style={styles.rollText}>
          {die == null
            ? "Roll the dice to start the game"
            : "You rolled a " + die}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    width: 200,
    backgroundColor: "lightgreen",
    marginRight: 10,
  },
  rollText: {
    color: "black",
  },
});

export default Playground;
