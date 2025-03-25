import {
  SafeAreaView,
  Text,
  View
} from 'react-native';


const ProductScreen = () => {
  return (
    <SafeAreaView>
      <View className='mt-6 mx-2.5'>
        <Text className='text-5xl text-gray-500' style={{ fontFamily: 'WorkSans-Black' }}>Product Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default ProductScreen;
