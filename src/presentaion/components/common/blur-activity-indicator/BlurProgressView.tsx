import React from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import { BlurView } from "expo-blur"

export interface InputProps {
  loadingDisabled?: boolean
}

const BlurProgressView = (props: InputProps) => {
  return (
    <BlurView style={styles.blurView} intensity={10}>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  blurView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
})

export default BlurProgressView
