import AppNavigation from "./navigation/appNavigation";
import { useFonts } from "expo-font";
import fonts from './config/fonts.js';
import store  from './redux/store';
import { Provider } from 'react-redux';
export default function App(){
  const [fontsLoaded] = useFonts(fonts);
  return !fontsLoaded ? null : (
    <Provider store={store}>
    <AppNavigation />
    </Provider>
  )
}