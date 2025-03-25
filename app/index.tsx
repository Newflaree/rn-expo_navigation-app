import {
  SafeAreaView,
  Text,
  View
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <View className='mt-6 mx-2.5'>
        <Text className='text-5xl' style={{ fontFamily: 'WorkSans-Black' }}>Navigation App</Text>

        <Text className='text-4xl font-work-black text-primary'>Navigation App</Text>

        <Text className='text-3xl font-work-medium text-secondary-200'>Navigation App</Text>
        <Text className='text-2xl font-work-light text-secondary'>Navigation App</Text>
        <Text className='text-xl font-work-light text-tertiary'>Navigation App</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
