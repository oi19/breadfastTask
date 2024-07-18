import { StyleSheet } from "react-native"
import {
  getHeight,
  getWidth,
  scale,
} from "../../../../shared/styles/dimensions"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: scale(10),
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: getHeight(8),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  imageWrapper: {
    marginEnd: getWidth(10),
  },
  image: {
    width: getWidth(60),
    height: getHeight(60),
    borderRadius: 30,
  },
  content: {},
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: getHeight(4),
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
})
