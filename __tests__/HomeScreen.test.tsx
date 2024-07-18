import React from "react"
import { fireEvent } from "@testing-library/react-native"
import { render } from "@testing-library/react-native"
import HomeScreen from "../src/presentaion/screens/HomeScreen/HomeScreen"
import * as api from "../src/infrastructure/api/api"
import { mockNavigate } from "./test-utils"
import renderer from "react-test-renderer"
import { useQuery } from "@tanstack/react-query"

jest.mock("../src/infrastructure/api/api")

describe("HomeScreen", () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.clearAllMocks()
    ;(api.fetchPosts as jest.Mock).mockResolvedValue(
      require("../__mocks__/mock").mockPosts
    )
    ;(useQuery as jest.Mock).mockImplementation(() => ({
      data: require("../__mocks__/mock").mockPosts,
      isLoading: false,
      error: null,
      refetch: jest.fn(),
    }))
  })

  // it("renders the home screen correctly", async () => {
  //   const screen = renderer.create(<HomeScreen />).toJSON()
  //   expect(screen).toMatchSnapshot()
  // })

  // it("navigates to PostDetailsScreen when a post is pressed", async () => {
  //   const tree = renderer.create(<HomeScreen />).toJSON()

  //   const postTitle = await findByText("Test Post")
  //   fireEvent.press(postTitle)

  //   expect(mockNavigate).toHaveBeenCalledWith("PostDetailsScreen", {
  //     postId: 1,
  //   })
  // })
})
