import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Constants from "expo-constants"
import * as Progress from "react-native-progress"

// Replace with Breadfast's primary color
const BREADFAST_PRIMARY_COLOR = "#690044" // Example color

const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const navigation = useNavigation()

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(timer)
          return 1
        }
        return prev + 0.1
      })
    }, 300)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 1) {
      navigation.navigate("HomeScreen")
    }
  }, [progress, navigation])

  return (
    <ImageBackground
      source={require("../../../../assets/breadfastSplash.png")}
      style={styles.container}
    >
      <View style={styles.loaderContainer}>
        <Progress.Bar
          progress={progress}
          width={200}
          color={BREADFAST_PRIMARY_COLOR}
          borderWidth={2}
          borderRadius={5}
          unfilledColor="#d6eaf8"
          animationType="spring"
        />
        <Text style={styles.versionText}>
          {/* Version {Constants.manifest.version} */}
          Version 1.0.0
        </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  versionText: {
    marginTop: 10,
    fontSize: 16,
    color: "#888",
  },
})

export default SplashScreen
