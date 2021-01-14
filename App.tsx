import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProjectRoutes from 'app/navigation/ProjectRoutes';
import {MenuProvider} from 'react-native-popup-menu';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <ProjectRoutes />
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
