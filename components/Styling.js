import { StyleSheet, Dimensions } from "react-native";
const newwidth = Dimensions.get("window").width;
const newheight = Dimensions.get("window").height;
export const style = StyleSheet.create({
  general: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  opacity: {
    width: newwidth * 0.9,
    padding: 10,
    backgroundColor: "orange",
    alignItems: "center",
    borderRadius: 30,
  },
  tht: {
    color: "white",
    fontSize: 22,
    lineHeight: 30,
  },
  view1: {
    height: newheight * 0.7,
    width: newwidth,
  },
  imagebig: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
    flexWrap: "wrap",
    aspectRatio: 1,
  },
  container: {
    left: 10,
    height: 50,
  },
  general_text: {
    fontSize: 16,
    // fontFamily: "Helvetica"
  },
  Heading: {
    fontSize: 20,
    // fontFamily: "Helvetica"
  },
});

export { newwidth, newheight };
