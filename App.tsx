import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProjectRoutes from 'app/navigation/ProjectRoutes';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <ProjectRoutes />
    </NavigationContainer>
  );
};

export default App;
