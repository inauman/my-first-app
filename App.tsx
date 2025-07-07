import MainTabNavigator from './screens/MainTabNavigator';
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
} 