// React Native
import { 
  SafeAreaView,
  Text,
  View,
} from 'react-native';


const HomePage = () => {
  return (
    <SafeAreaView>
      <View className='mt-6 mx-2.5'>
        <Text className='text-5xl' style={{ fontFamily: 'WorkSans-Black' }}>HomePage</Text>

        <Text className='text-4xl font-work-black'>HomePage</Text>
        <Text className='text-3xl font-work-medium'>HomePage</Text>
        <Text className='text-2xl font-work-light'>HomePage</Text>
        <Text className='text-xl'>HomePage</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
