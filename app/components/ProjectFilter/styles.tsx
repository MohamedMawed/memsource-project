import {deviceWidth} from 'app/helpers/device';
import colors from 'app/theme/colors';
import {Platform, StyleSheet} from 'react-native';

const isAndroid = Platform.OS === 'android';
export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.primary,
  },
  menuContainer: {
    width: '100%',
    marginBottom: 10,
  },
  menuButton: {
    width: '100%',
    padding: 10,
    borderWidth: 1.2,
    borderColor: colors.white,
  },
  menuText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
  },
  menuWrapper: {
    width: '100%',
  },
  optionsWrapper: {
    width: deviceWidth - 20,
  },
  slider: {
    width: deviceWidth + (isAndroid ? 5 : -20),
    marginLeft: isAndroid ? -10 : 0,
    height: 40,
  },
  optionWrapper: {
    padding: 5,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.7,
  },
  optionText: {
    color: colors.black,
    margin: 8,
    textAlign: 'center',
  },
});
