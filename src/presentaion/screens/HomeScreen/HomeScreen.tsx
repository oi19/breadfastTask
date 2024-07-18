import React, { useState } from "react"
import { Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import useFetch from "../../../hooks/useFetch"
import { fetchPosts } from "../../../infrastructure/api/api"
import { MainAppStackTypes } from "../../../navigation/navigation-types"
import { SafeAreaView } from "react-native-safe-area-context"
import List from "../../components/shared/list"
import Header from "../../components/shared/Header"
import SearchBar from "../../components/shared/SearchBar"
import { styles } from "./styles"
import BlurProgressView from "../../components/common/blur-activity-indicator/BlurProgressView"
import { Post } from "../../../domain/posts"
import Card from "../../components/common/Cards/Cards"

const HomeScreen = () => {
  const navigation = useNavigation()
  const { data, isLoading, error, refetch } = useFetch("posts", fetchPosts)
  const [query, setQuery] = useState("")

  const filteredData = data?.filter((item: Post) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  const handleNavigation = (item: Post) => {
    navigation.navigate("PostDetailsScreen", { postId: item.id })
  }

  // if (isLoading) return <BlurProgressView />
  // if (error) return <Text style={styles.errorText}>Error loading news</Text>

  const renderPostItem = ({ item }: { item: Post }) => (
    <Card
      item={item}
      type="post"
      postType="list"
      navigationHandler={handleNavigation}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <SearchBar query={query} setQuery={setQuery} />
      {isLoading ? (
        <BlurProgressView />
      ) : error ? (
        <Text style={styles.errorText}>Error loading news</Text>
      ) : (
        <List
          keyExtractor={(item: Post) => item.id.toString()}
          data={filteredData}
          renderItem={renderPostItem}
          loading={isLoading}
          onRefresh={refetch}
        />
      )}
    </SafeAreaView>
  )
}

export default HomeScreen
