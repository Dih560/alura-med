import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    height: 150,
    width: width,
    paddingLeft: 60,
  },
  image: {
    height: "100%",
    width: 150,
    marginHorizontal: 15
  },
  lastImage: {
    marginRight: 200
  }
});
