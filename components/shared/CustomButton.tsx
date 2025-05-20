// React Native
import { 
  View,
  Text,
  Pressable,
  PressableProps
} from 'react-native';


interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
}

export const CustomButton = ({
  children,
  color = 'primary',
  onPress,
  onLongPress
}: Props) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  return (
    <Pressable
      className={ `p-3 rounded-md ${ btnColor } active:opacity-90` }
      onPress={ onPress }
      onLongPress={ onLongPress }
    >
      <Text className='text-white text-center'>{ children }</Text>
    </Pressable>
  );
}
