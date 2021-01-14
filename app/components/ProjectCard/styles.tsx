import colors from 'app/theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  headerValue: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 3,
  },
  rowText: {
    fontSize: 14,
  },
  cardContainer: {
    padding: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginTop: 10,
  },
  seperator: {
    height: 0.7,
    marginVertical: 10,
    backgroundColor: 'lightgrey',
  },
});
