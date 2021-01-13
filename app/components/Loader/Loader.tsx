import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const Loader: FC<{}> = () => {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </View>
  );
};

export default Loader;
