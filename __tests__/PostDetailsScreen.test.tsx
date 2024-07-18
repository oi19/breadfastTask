import React from "react"
import PostDetailsScreen from "../src/presentaion/screens/PostDetailsScreen/PostDetailsScreen"
import * as api from "../src/infrastructure/api/api"
import renderer from "react-test-renderer"
import { mockNavigate } from "./test-utils"

jest.mock("../src/infrastructure/api/api")

const route = {
  params: { postId: 1 },
}

describe("PostDetailsScreen", () => {
  beforeEach(() => {
    ;(api.fetchPostDetails as jest.Mock).mockResolvedValue(
      require("../__mocks__/mock").mockPost
    )
    ;(api.fetchComments as jest.Mock).mockResolvedValue(
      require("../__mocks__/mock").mockComments
    )
  })

  it("renders the post details screen correctly", async () => {
    const screen = renderer.create(<PostDetailsScreen route={route} />).toJSON()
    expect(screen).toMatchSnapshot()

    // expect(await findByText("Detail")).toBeTruthy()
    // expect(await findByText("Test Post")).toBeTruthy()
    // expect(await findByText("This is the body of the test post.")).toBeTruthy()
    // expect(await findByText("Comments")).toBeTruthy()
    // expect(await findByText("This is a comment.")).toBeTruthy()
  })
})
