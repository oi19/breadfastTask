import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"
import { getHeight } from "../../../shared/styles/dimensions"

type ReadTextMoreProps = {
  text: string
  title?: string
  titleStyle?: string
  textStyle?: string
  enableReadMore?: boolean
  onReadMorePressedHandler?: () => void
}

const ReadMore: React.FC<ReadTextMoreProps> = ({
  text,
  onReadMorePressedHandler,
}) => {
  const [showFullText, setShowFullText] = React.useState(false)

  const handlePress = () => {
    if (onReadMorePressedHandler) {
      onReadMorePressedHandler()
    }
    // setShowFullText(!showFullText)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={showFullText ? undefined : 2}>
        {text}
      </Text>
      {!showFullText && text.length > 0 && (
        <TouchableOpacity
          disabled={!onReadMorePressedHandler && true}
          onPress={handlePress}
        >
          <Text style={styles.readMore}>... Read more</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: getHeight(16),
  },
  text: {
    fontFamily: "sans-serif-medium",
    fontSize: 14,
    color: "#4A4A4A",
  },
  readMore: {
    fontFamily: "sans-serif-medium",
    fontSize: 14,
    color: "#1E90FF",
  },
})

export default ReadMore
