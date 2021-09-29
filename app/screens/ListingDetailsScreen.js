import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/mapa1.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Groceries</AppText>
        <AppText style={styles.subTitle}>30.09 9:30</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/wielas.jpg")}
            title="Krzysztof Wielicki"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
