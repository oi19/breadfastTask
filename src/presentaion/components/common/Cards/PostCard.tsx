import React from "react"
import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native"
import { Post } from "../../../../domain/posts"
import BaseCard from "../../shared/BaseCard/BaseCard"
import ReadMore from "../../shared/ReadMore"
import { Svgs } from "../../../../assets"

interface PostCardProps {
  post: Post
  postType: "detailed" | "list"
  navigationHandler?: (item: Post) => void
  commentsCount?: number
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  postType,
  navigationHandler,
  commentsCount,
}) => {
  const handlePress = () => {
    if (navigationHandler) navigationHandler(post)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <BaseCard>
        <View style={styles.header}>
          {post.user_id ? <Svgs name="user" /> : null}
          <View style={styles.headerText}>
            <Text style={styles.username}>User {post.user_id}</Text>
            <Text style={styles.date}>
              Posted on {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{post.title}</Text>
          {postType == "list" ? (
            <ReadMore text={post.body} />
          ) : (
            <Text style={styles.body}>{post.body}</Text>
          )}
        </View>
        {commentsCount && (
          <View style={styles.footer}>
            <Text style={styles.comments}>Comments: {commentsCount}</Text>
          </View>
        )}
      </BaseCard>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  headerText: {
    flexDirection: "column",
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  content: {
    marginBottom: 12,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
    color: "#333",
  },
  body: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  readMore: {
    fontSize: 14,
    color: "#1E90FF",
    marginTop: 4,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comments: {
    fontSize: 12,
    color: "#999",
  },
})

export default PostCard
