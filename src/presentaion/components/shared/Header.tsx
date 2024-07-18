import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Svgs } from "../../../assets"

interface HeaderProps {
  title: string
  showBackButton?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigation = useNavigation()

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: showBackButton ? "space-between" : "center",
        },
      ]}
    >
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Svgs name="arrow" />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, { flexGrow: showBackButton ? 1 : 0 }]}>
        {title}
      </Text>
      {!showBackButton && <View style={styles.spacer} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  spacer: {
    flexGrow: 1,
  },
})

export default Header
