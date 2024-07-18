import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render } from "@testing-library/react-native"

// Initialize a new QueryClient
const queryClient = new QueryClient()

// Mock the navigate function
export const mockNavigate = jest.fn()

// Custom render function that wraps the component with NavigationContainer and QueryClientProvider
export function renderWithProviders(
  ui: React.ReactElement,
  { routeParams = {} } = {}
) {
  const Wrapper = ({ children }) => (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        {React.cloneElement(children, {
          navigation: { navigate: mockNavigate },
          route: { params: routeParams },
        })}
      </QueryClientProvider>
    </NavigationContainer>
  )

  return render(ui, { wrapper: Wrapper })
}

// Mock for @react-navigation/native
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native")
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: jest.fn(),
    }),
    useFocusEffect: jest.fn(),
  }
})

// Mock for @react-navigation/stack
jest.mock("@react-navigation/stack", () => ({
  createStackNavigator: jest.fn(),
}))

// Mock for @tanstack/react-query
jest.mock("@tanstack/react-query", () => {
  const actualQuery = jest.requireActual("@tanstack/react-query")
  return {
    ...actualQuery,
    useQueryClient: () => ({
      ...actualQuery.useQueryClient(),
      getQueryData: jest
        .fn()
        .mockReturnValueOnce({ data: require("../__mocks__/mock").mockPosts })
        .mockReturnValueOnce({
          data: require("../__mocks__/mock").mockComments,
        }),
    }),
    useQuery: jest.fn(),
  }
})
