import React from "react"
import { View, StyleSheet } from "react-native"

interface BaseCardProps {
  children: React.ReactNode
}

const BaseCard: React.FC<BaseCardProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
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
})

export default BaseCard
