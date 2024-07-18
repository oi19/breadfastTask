import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  postCard: {
    marginBottom: 16,
  },
  commentSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  commentCard: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 8,
  },
  commentName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  commentContent: {
    fontSize: 14,
    color: "#555",
  },
})
