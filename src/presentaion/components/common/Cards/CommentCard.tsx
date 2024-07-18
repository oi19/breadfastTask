import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Comment } from "../../../../domain/comment"
import BaseCard from "../../shared/BaseCard/BaseCard"

interface CommentCardProps {
  comment: Comment
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <BaseCard>
      <View style={styles.content}>
        <Text style={styles.name}>{comment.name}</Text>
        <Text style={styles.body}>{comment.body}</Text>
      </View>
    </BaseCard>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
})

export default CommentCard
