// React Native
import { 
  View,
  Text
} from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'indigo',
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='(stack)'
        options={{
          title: 'Stack Screen',
          tabBarIcon: ({ color }) => <Ionicons
            size={ 28 }
            name='person-add-outline'
            color={ color }
          />
        }}
      />
      <Tabs.Screen
        name='home/index'
        options={{
          title: 'Home Screen',
          tabBarIcon: ({ color }) => <Ionicons
            size={ 28 }
            name='home-outline'
            color={ color }
          />
        }}
      />
      <Tabs.Screen
        name='favorites/index'
        options={{
          title: 'Favorites Screen',
          tabBarIcon: ({ color }) => <Ionicons
            size={ 28 }
            name='star-outline'
            color={ color }
          />
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
