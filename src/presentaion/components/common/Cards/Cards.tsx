import React from "react"
import { Post } from "../../../../domain/posts"
import { Comment } from "../../../../domain/comment"
import PostCard from "./PostCard"
import CommentCard from "./CommentCard"

interface CardProps {
  item: Post | Comment
  type: "post" | "comment"
  postType?: "detailed" | "list"
  navigationHandler?: (item: Post) => void
  commentsCount?: number
  props?: any
}

const Card: React.FC<CardProps> = ({
  item,
  type,
  postType,
  commentsCount,
  navigationHandler,
  props,
}) => {
  switch (type) {
    case "post":
      return (
        <PostCard
          post={item as Post}
          navigationHandler={navigationHandler}
          postType={postType}
          commentsCount={commentsCount}
          {...props}
        />
      )
    case "comment":
      return <CommentCard comment={item as Comment} {...props} />
    default:
      return (
        <PostCard
          post={item as Post}
          navigationHandler={navigationHandler}
          postType={postType}
          commentsCount={commentsCount}
          {...props}
        />
      )
  }
}

export default Card
