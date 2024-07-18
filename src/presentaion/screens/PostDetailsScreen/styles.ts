import { StyleSheet } from "react-native"
import { getHeight, scale } from "../../../shared/styles/dimensions"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(16),
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  postCard: {
    marginBottom: getHeight(16),
  },
  commentSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: getHeight(8),
  },
  commentCard: {
    padding: scale(16),
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: getHeight(8),
  },
  commentName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: getHeight(4),
  },
  commentContent: {
    fontSize: 14,
    color: "#555",
  },
})
