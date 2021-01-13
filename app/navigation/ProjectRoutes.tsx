import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Project from 'app/screens/Project/Project';
import ProjectDetails from 'app/screens/ProjectDetails/ProjectDetails';
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Project" component={Project} />
    <Stack.Screen
      options={{
        title: 'Project Details',
        headerTintColor: 'lightblue',
        headerShown: false,
      }}
      name="ProjectDetails"
      component={ProjectDetails}
    />
  </Stack.Navigator>
);
