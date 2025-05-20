// React Native
import { 
  SafeAreaView,
  Text,
  View,
} from 'react-native';
// Expo
import {
  Link,
  Redirect
} from 'expo-router';


const AppPage = () => {
  //return <Redirect href='/home' />
  return <Redirect href='/tabs' />

  /*
  return (
    <SafeAreaView>
      <View className='mt-10 mx-2.5'>
        <Text className='text-5xl' style={{ fontFamily: 'WorkSans-Black' }}>HomePage</Text>

        <Text className='text-4xl font-work-black text-primary'>HomePage</Text>
        <Text className='text-3xl font-work-medium text-secondary'>HomePage</Text>
        <Text className='text-2xl font-work-light text-secondary-100'>HomePage</Text>
        <Text className='text-xl text-tertiary'>HomePage</Text>

        <Link href='/products'>
          Products
        </Link>
      </View>
    </SafeAreaView>
  );
   * */
}

export default AppPage;
