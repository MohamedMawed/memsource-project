import React, {FC, ReactElement} from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  ViewStyle,
} from 'react-native';
import {isAndroid} from '../../helpers/device';

interface ButtonProps {
  children: ReactElement;
  style?: ViewStyle;
  onPress?: () => void;
}
const TouchableCrossPlatform: FC<ButtonProps> = ({children, ...props}) => {
  if (isAndroid) {
    return (
      <TouchableNativeFeedback {...props}>{children}</TouchableNativeFeedback>
    );
  }
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

export default TouchableCrossPlatform;
