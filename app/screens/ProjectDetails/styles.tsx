import {StyleSheet} from 'react-native';
import colors from 'app/theme/colors';

export default StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  infoRowContainer: {
    paddingVertical: 15,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.7,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginTop: 5,
  },
  infoRowTitle: {
    color: colors.white,
    fontSize: 16,
  },
  infoRowValue: {
    color: colors.white,
    fontSize: 16,
  },
  projectContentContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectIconContainer: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectTitle: {
    fontWeight: '500',
    fontSize: 18,
    color: colors.white,
    marginVertical: 10,
  },
  projectSectionContainer: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  sectionLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  headerIcon: {
    marginRight: 15,
  },
  projectSectionText: {
    fontSize: 16,
  },
});
