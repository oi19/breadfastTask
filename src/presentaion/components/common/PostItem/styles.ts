// components/common/NewsItem/styles.ts
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  imageWrapper: {
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
})
