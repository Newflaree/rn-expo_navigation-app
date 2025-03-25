import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { Link } from 'expo-router';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>
        <Text className='text-5xl text-gray-500' style={{ fontFamily: 'WorkSans-Black' }}>Home Screen</Text>

        <Link className='mb-5' href='/products'>Productos</Link>
        <Link className='mb-5' href='/profile'>Perfil</Link>
        <Link className='mb-5' href='/settings'>Ajustes</Link>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
