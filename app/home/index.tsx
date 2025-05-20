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
          <CustomButton>
            Products
          </CustomButton>
        </Link>

        <CustomButton
          onPress={ () => router.push('/products') }
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
