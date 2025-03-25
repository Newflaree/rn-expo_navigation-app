import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { Link, router } from 'expo-router';
import CustomButton from '../../components/shared/CustomButton';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>
        <Text className='text-5xl text-gray-500' style={{ fontFamily: 'WorkSans-Black' }}>Home Screen</Text>

        {/*<Link className='mb-5' href='/products'>Productos</Link>*/}

        <Link className='mb-5' href='/products' asChild>
          <CustomButton color='secondary'>
            Productos
          </CustomButton>
        </Link>

        <CustomButton
          onPress={ () => router.push('/products') }
        >
          Productos
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
