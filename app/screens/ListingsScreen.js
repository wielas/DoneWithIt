import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

import { AdMobBanner } from "expo-ads-admob";
import Ad from "./Ad";

function bannerError() {
  console.log("Banner error");
  return;
}

const listings = [
  {
    id: 1,
    title: "Groceries",
    subTitle: "Kobylepole 5, Poznań",
    image: require("../assets/mapa1.jpg"),
    date: "25.11.2021",
  },
  {
    id: 2,
    title: "Entertain the lonely old folk",
    subTitle: "Sielska 13, Poznań",
    image: require("../assets/mapa4.jpg"),
    date: "30.11.2021",
  },
  {
    id: 3,
    title: "Ad",
  },
  {
    id: 4,
    title: "Deliver food here",
    subTitle: "Sielska 13, Poznań",
    image: require("../assets/mapa4.jpg"),
    date: "30.11.2021",
  },
];

function returnAdOrCard({item}) {
  if (item.title !== "Ad") {
    return (
      <Card
        title={item.title}
        subTitle={item.subTitle}
        image={item.image}
        onPress={() => navigation.navigate("ListingDetails", item)}
      />
    )
  } else {
    return <Ad/>
  }
}

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          returnAdOrCard({item})
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
