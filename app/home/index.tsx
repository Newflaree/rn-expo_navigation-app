// React Native
import { 
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Link, router } from 'expo-router';
import { CustomButton } from '@/components/shared/CustomButton';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        <Link href='/products' asChild>
          <CustomButton className='mb-5'>
            Products
          </CustomButton>
        </Link>

        <CustomButton
          onPress={ () => router.push('/products') }
          className='mb-5'
        >
          Products
        </CustomButton>

        <CustomButton
          variant='text-only'
          onPress={ () => router.push('/products') }
          className='mb-5'
        >
          Products
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
