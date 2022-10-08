import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Navigation from "./src/components/Navigation";
import HomeScreen from "./src/screens/HomeScreen";
import MoviesScreen from "./src/screens/MoviesScreen";
import Search from "./src/screens/Search";

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: ()=> <Navigation/>
      }
    },
    Navigation: Navigation,
    Search: Search,
    Movies: MoviesScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#141414' },

  }

);

export default createAppContainer(navigator);

