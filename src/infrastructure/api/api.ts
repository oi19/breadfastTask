import { BASE_URL } from "@env"
import axios from "axios"
import { Post } from "../../domain/posts"
import { Comment } from "../../domain/comment"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request:", config)
    return config
  },
  (error) => {
    console.log("Request Error:", error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response)
    return response
  },
  (error) => {
    console.log("Response Error:", error)
    return Promise.reject(error)
  }
)

export const fetchPostDetails = async (postId: number): Promise<Post> => {
  const response = await axiosInstance.get<Post>(`/posts/${postId}`)
  return response.data
}

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const response = await axiosInstance.get<Comment[]>(
    `/posts/${postId}/comments`
  )
  return response.data
}

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get<Post[]>("/posts")
  return response.data
}

export default axiosInstance
