import {Dimensions, Platform} from 'react-native';

const getDimentions = () => ({
  deviceWidth: Math.min(
    Dimensions.get('window').width,
    Dimensions.get('window').height,
  ),
  deviceHeight: Math.max(
    Dimensions.get('window').width,
    Dimensions.get('window').height,
  ),
});
export const {deviceWidth, deviceHeight} = getDimentions();

export const isAndroid = Platform.OS === 'android';
export function isIphoneXorAbove() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}
