import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Groceries",
    subTitle: "30.09 9:30 Kobylepole 5, Poznań",
    image: require("../assets/mapa1.jpg"),
  },
  {
    id: 2,
    title: "Entertain the lonely old folk",
    subTitle: "Sielska 13, Poznań",
    image: require("../assets/mapa4.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
