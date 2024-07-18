// components/common/NewsItem/NewsItem.tsx
import React from "react"
import { TouchableOpacity, Image, Text, View } from "react-native"
import { Post } from "../../../../domain/posts"
import { styles } from "./styles"

interface PostItemProps {
  item: Post
  navigationHandler: (item: Post) => void
}

const PostItem: React.FC<PostItemProps> = ({ item, navigationHandler }) => {
  const handlePress = () => {
    navigationHandler(item)
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {item.user_id ? (
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: `https://api.adorable.io/avatars/285/${item.user_id}.png`,
            }}
            style={styles.image}
          />
        </View>
      ) : null}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>
          {item.body ? item.body : "No content available"}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PostItem
