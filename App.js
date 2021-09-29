import React from "react";
import { Text, View } from "react-native";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem title="My title" subTitle="My subtitle" />
    </Screen>
  );
}

// {
//   /* <View
//       style={{
//         backgroundColor: "#fff",
//         flex: 1,
//         flexDirection: "row",
//         paddingTop: (Platform.OS = "android" ? 40 : 0),
//         justifyContent: "center",
//         alignItems: "center",
//         // alignContent: "center",
//         // flexWrap: "wrap",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "gold",
//           width: 100,
//           height: 100,
//           top: 20,
//           left: 20,
//           position: "absolute",
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           width: 100,
//           height: 100,
//         }}
//       />
//     </View> */
// }
