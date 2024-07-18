import { StyleSheet } from "react-native"
import { getHeight, scale } from "../../../shared/styles/dimensions"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(16),
  },
  loadingText: {
    textAlign: "center",
    marginTop: getHeight(20),
  },
  errorText: {
    textAlign: "center",
    color: "red",
  },
})
