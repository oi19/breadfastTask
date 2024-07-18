import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { scale } from "../../../shared/styles/dimensions"

interface SearchBarProps {
  query: string
  setQuery: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    padding: scale(8),
    borderRadius: 8,
  },
})

export default SearchBar
