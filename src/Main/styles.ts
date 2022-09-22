import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B191C",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    backgroundColor: "#F53221",
    width: 350,
    height: 150,
    borderRadius: 10,
  },
  topView: {
    backgroundColor: "gray",
    width: 350,
    height: 150,
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 10,
  },
  flipEffect: {
    backgroundColor: "#ddd",
    width: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  innerShadowEffect: {
    backgroundColor: "#ddd",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
