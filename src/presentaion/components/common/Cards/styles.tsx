import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  imageWrapper: {
    marginEnd: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  content: {},
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
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
