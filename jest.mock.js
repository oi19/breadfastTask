


const actualNav = jest.requireActual("@react-navigation/native")

module.exports = {
  ...actualNav,
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  useFocusEffect: jest.fn(),
}


module.exports = {
  createStackNavigator: jest.fn(),
}


module.exports = {
  'new QueryClient': () => ({
    useQuery: jest.fn()
  })
}