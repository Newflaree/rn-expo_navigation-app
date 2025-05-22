// React Native
import { 
  SafeAreaView,
  View,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
// Expo
import {
  Link,
  router,
  useNavigation
} from 'expo-router';
// Compoenents
import { CustomButton } from '@/components/shared/CustomButton';


const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer );
  }

  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        <CustomButton
        onPress={ () => router.push('/products') }
          className='mb-2'
        >
          Products
        </CustomButton>

        <CustomButton
          onPress={ () => router.push('/profile') }
          className='mb-2'
          color='secondary'
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={ () => router.push('/settings') }
          className='mb-2'
          color='tertiary'
        >
          Settings
        </CustomButton>

        <Link href='/products' asChild>
          <CustomButton className='mb-5' variant='text-only'>
            Products
          </CustomButton>
        </Link>

        <CustomButton onPress={ onToggleDrawer }>
          Abrir menú
        </CustomButton>

        {/*
        <Link className='mb-5' href='/products'>Products</Link>
        <Link className='mb-5' href='/profile'>Profile</Link>
        <Link className='mb-5' href='/settings'>Settings</Link>
        */}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
