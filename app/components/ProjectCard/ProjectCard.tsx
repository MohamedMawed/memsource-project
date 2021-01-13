import {useNavigation} from '@react-navigation/native';
import React, {FC, ReactElement} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

interface rowProps {
  title: string;
  value: string;
}
const CardHeader: FC<rowProps> = ({title, value}) => {
  return (
    <View style={styles.headerRowContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerValue}>{value}</Text>
    </View>
  );
};

const CardRow: FC<rowProps> = ({title, value}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.rowText}>{title}</Text>
      <Text style={styles.rowText}>{value}</Text>
    </View>
  );
};
const ProjectCard: FC<{}> = (): ReactElement => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={'lightgrey'}
      onPress={() => navigation.navigate('ProjectDetails')}
      style={styles.cardContainer}>
      <>
        <CardHeader title={'Project Name'} value={'New'} />
        <View style={styles.seperator} />
        <CardRow title={'Project Name'} value={'New'} />
        <CardRow title={'Project Name'} value={'New'} />
        <CardRow title={'Project Name'} value={'New'} />
        <CardRow title={'Project Name'} value={'New'} />
      </>
    </TouchableHighlight>
  );
};

export default ProjectCard;
