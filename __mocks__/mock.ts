export const mockPosts = [
  {
    id: 1,
    user_id: 1,
    title: "Test Post",
    body: "This is the body of the test post.",
    created_at: "2023-01-01T00:00:00Z",
    comments_count: 10,
  },
]

export const mockPost = {
  id: 1,
  user_id: 1,
  title: "Test Post",
  body: "This is the body of the test post.",
  created_at: "2023-01-01T00:00:00Z",
  comments_count: 10,
}

export const mockComments = [
  {
    id: 1,
    name: "John Doe",
    body: "This is a comment.",
    post_id: 1,
  },
]

export const fetchPosts = jest.fn().mockResolvedValue(mockPosts)
export const fetchPostDetails = jest.fn().mockResolvedValue(mockPost)
export const fetchComments = jest.fn().mockResolvedValue(mockComments)
