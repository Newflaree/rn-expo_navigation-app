import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { Link, router } from 'expo-router';
import CustomButton from '../../../components/shared/CustomButton';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10 py-5'>
        {/*<Text className='text-5xl text-gray-500 mb-10' style={{ fontFamily: 'WorkSans-Black' }}>Home Screen</Text>*/}


        <CustomButton
          className='mb-2'
          color='primary'
          onPress={ () => router.push('/products') }
        >
          Productos
        </CustomButton>

        <CustomButton
          className='mb-2'
          onPress={ () => router.push('/profile') }
          color='secondary'
        >
          Profile
        </CustomButton>

        <CustomButton
          className='mb-2'
          onPress={ () => router.push('/settings') }
          color='tertiary'
        >
          Settings
        </CustomButton>




        {/*<Link className='mb-5' href='/products'>Productos</Link>*/}

        <Link className='mt-10 mb-5' href='/products' asChild>
          <CustomButton color='secondary' variant='text-only'>
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
