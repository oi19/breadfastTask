import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/shared/Header"
import useFetch from "../../../hooks/useFetch"
import {
  fetchPostDetails,
  fetchComments,
} from "../../../infrastructure/api/api"
import { Comment } from "../../../domain/comment"
import { styles } from "./styles"
import List from "../../components/shared/list"
import BlurProgressView from "../../components/common/blur-activity-indicator/BlurProgressView"
import Card from "../../components/common/Cards/Cards"

const PostDetailsScreen = ({ route }) => {
  const { postId } = route.params
  const {
    data: post,
    isLoading: isLoadingPost,
    error: errorPost,
  } = useFetch(`post-${postId}`, () => fetchPostDetails(postId))
  const {
    data: comments,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useFetch(`comments-${postId}`, () => fetchComments(postId))

  if (isLoadingPost || isLoadingComments) {
    return <BlurProgressView />
  }

  if (errorPost || errorComments) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error loading data</Text>
      </View>
    )
  }

  const renderCommentItem = ({ item }: { item: Comment }) => (
    <Card item={item} type="comment" />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton title="Detail" />
      <View>{post && <Card item={post} type="post" />}</View>
      <Text>Comments</Text>
      <List
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default PostDetailsScreen
