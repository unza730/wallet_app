import AppNavigation from "./navigation/appNavigation";
import { useFonts } from "expo-font";
import fonts from './config/fonts.js'
export default function App(){
  const [fontsLoaded] = useFonts(fonts);
  return !fontsLoaded ? null : (
    <AppNavigation />
  )
}