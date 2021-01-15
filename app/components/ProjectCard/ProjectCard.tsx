import {useNavigation} from '@react-navigation/native';
import colors from 'app/theme/colors';
import {TitleValueProps} from 'app/types/ProjectTypes';
import React, {FC, ReactElement} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

const CardHeader: FC<TitleValueProps> = ({title, value}) => {
  return (
    <View style={styles.headerRowContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerValue}>{value}</Text>
    </View>
  );
};

const CardRow: FC<TitleValueProps> = ({title, value}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.rowText}>{title}</Text>
      <Text style={styles.rowText}>{value}</Text>
    </View>
  );
};

interface Project {
  id: string;
  name: string;
  sourceLang: string;
  targetLangs: Array<string>;
  status: string;
  internalId: number;
  dateDue: string | null;
  client: string | null;
  owner: {
    userName: string;
  };
}
const ProjectCard: FC<{project: Project}> = ({project}): ReactElement => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={colors.lightGrey}
      onPress={() => navigation.navigate('ProjectDetails', {project: project})}
      style={styles.cardContainer}>
      <>
        <CardHeader title={project.name} value={project.status} />
        <View style={styles.seperator} />
        <CardRow title={'#'} value={project.internalId} />
        <CardRow title={'Due Date'} value={project.dateDue || 'No due date'} />
        <CardRow title={'Client'} value={project.client || 'No Client'} />
        <CardRow title={'Owner'} value={project.owner.userName} />
      </>
    </TouchableHighlight>
  );
};

export default ProjectCard;
