import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Project from 'app/screens/Project/Project';
import ProjectDetails from 'app/screens/ProjectDetails/ProjectDetails';
import colors from 'app/theme/colors';
import {StyleSheet, View} from 'react-native';
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    height: '100%',
  },
});
export default () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      options={{
        headerTintColor: colors.white,
        headerBackground: () => <View style={styles.headerContainer} />,
        // headerShown: false,
      }}
      name="Project"
      component={Project}
    />
    <Stack.Screen
      options={{
        title: 'Project Details',
        headerShown: false,
      }}
      name="ProjectDetails"
      component={ProjectDetails}
    />
  </Stack.Navigator>
);
