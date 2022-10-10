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
    width: 375,
    height: 175,
    borderRadius: 8,
  },
  iconsContent: {
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 25,
  },
  topView: {
    backgroundColor: "gray",
    width: 375,
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 8,
    position: "absolute",
  },
  topViewContent: {
    backgroundColor: "gray",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
    position: "absolute",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
    marginTop: 15,
  },
  logo: {
    width: 375,
    height: 145,
    borderTopRadius: 8,
    position: "absolute",
  },
  bottomContent: {
    backgroundColor: "#A04F4C",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 375,
    height: 35,
    paddingHorizontal: 10,
  },
  infoContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    color: "white",
    marginLeft: 3,
  },
  // inner
  innerEffect: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: "hidden",
    position: "absolute",
  },
  // flip
  flipEffect: {
    backgroundColor: "#ddd",
    width: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: "hidden",
  },
  mirrorView: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  mirror: {
    width: 375,
    height: "100%",
    opacity: 0.9,
    position: "absolute",
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 999,
  },
});
