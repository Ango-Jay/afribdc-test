import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {CustomFlashbar} from '@/components/shared/toast-utils/CustomFlashbar';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    JostRegular: require('../assets/fonts/Jost-Regular.ttf'),
    JostMedium: require('../assets/fonts/Jost-Medium.ttf'),
    JostSemiBold: require('../assets/fonts/Jost-SemiBold.ttf'),
    JostBold: require('../assets/fonts/Jost-Bold.ttf'),
    MulishExtraBold: require('../assets/fonts/Mulish-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{headerShown: false}} />
      <FlashMessage MessageComponent={CustomFlashbar} />
    </GestureHandlerRootView>
  );
}
