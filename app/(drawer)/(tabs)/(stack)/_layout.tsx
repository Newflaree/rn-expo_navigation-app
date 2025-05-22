import { 
  View,
  Text
} from 'react-native';
import {
  DrawerActions,
  useNavigationState
} from '@react-navigation/native';
import {
  Stack,
  useNavigation,
  useRouter
} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const onHeaderLeftClick = ( canGoBack: boolean ) => {
    return ( canGoBack ) 
      ? router.back()
      : navigation.dispatch( DrawerActions.toggleDrawer() );
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'arrow-back-outline' : 'menu-outline'}
            size={20}
            color={tintColor}
            style={{ marginRight: 15 }}
            onPress={ () => onHeaderLeftClick( canGoBack! )}
          />
        ),
        contentStyle: {
          backgroundColor: 'white'
        },
      }}
    >
      <Stack.Screen
        name='home/index'
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name='products/index'
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name='profile/index'
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name='settings/index'
        options={{ title: 'Settings' }}
      />
    </Stack>
  );
};

export default StackLayout;

