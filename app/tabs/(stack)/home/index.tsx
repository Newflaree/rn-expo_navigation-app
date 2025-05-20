// React Native
import { 
  SafeAreaView,
  View,
} from 'react-native';
import { Link, router } from 'expo-router';
import { CustomButton } from '@/components/shared/CustomButton';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        <CustomButton
        onPress={ () => router.push('/tabs/(stack)/products') }
          className='mb-2'
        >
          Products
        </CustomButton>

        <CustomButton
          onPress={ () => router.push('/tabs/(stack)/profile') }
          className='mb-2'
          color='secondary'
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={ () => router.push('/tabs/(stack)/settings') }
          className='mb-2'
          color='tertiary'
        >
          Settings
        </CustomButton>

        <Link href='/tabs/(stack)/products' asChild>
          <CustomButton className='mb-5' variant='text-only'>
            Products
          </CustomButton>
        </Link>

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
