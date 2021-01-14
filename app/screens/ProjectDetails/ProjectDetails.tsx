import React, {FC, ReactElement} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TouchableCrossPlatform from 'app/components/Button/Button';
import styles from './styles';
import colors from 'app/theme/colors';
import {useNavigation} from '@react-navigation/native';
import {ProjectType, TitleValueProps} from 'app/types/ProjectTypes';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableCrossPlatform
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="arrow-back" size={26} color={colors.white} />
      </TouchableCrossPlatform>
      <View style={styles.headerActionsContainer}>
        <TouchableCrossPlatform>
          <View style={styles.headerIcon}>
            <AntDesign name="plus" size={25} color={colors.white} />
          </View>
        </TouchableCrossPlatform>
        <TouchableCrossPlatform>
          <Entypo name="dots-three-vertical" size={20} color={colors.white} />
        </TouchableCrossPlatform>
      </View>
    </View>
  );
};

const InfoRow: FC<TitleValueProps> = ({title, value}) => {
  return (
    <View style={styles.infoRowContainer}>
      <Text style={styles.infoRowTitle}>{title}</Text>
      <Text style={styles.infoRowValue}>{value}</Text>
    </View>
  );
};

const ProjectContent: FC<{project: ProjectType}> = ({project}) => {
  return (
    <View style={styles.projectContentContainer}>
      <View style={styles.projectIconContainer}>
        <Octicons name="file-directory" size={30} color={colors.white} />
      </View>
      <Text style={styles.projectTitle}>{project.name}</Text>
      <InfoRow title={'Source Language'} value={project.sourceLang} />
      <InfoRow
        title={'Target Language(s)'}
        value={project.targetLangs.reduce(
          (res, e, idx) =>
            `${res}${e}${idx < project.targetLangs.length - 1 ? ', ' : ''}`,
          '',
        )}
      />
      <InfoRow title={'Owner'} value={project.owner.userName} />
    </View>
  );
};

const ProjectSection = () => {
  return (
    <TouchableCrossPlatform>
      <View style={styles.projectSectionContainer}>
        <View style={styles.sectionLabelContainer}>
          <View style={styles.sectionIconContainer}>
            <FontAwesome name="file" size={20} color={colors.white} />
          </View>
          <Text style={styles.projectSectionText}>Jobs</Text>
        </View>
        <Ionicons
          name="md-chevron-forward"
          size={25}
          color={colors.lightGrey}
        />
      </View>
    </TouchableCrossPlatform>
  );
};
const ProjectDetails: FC<{route: {params: {project: ProjectType}}}> = ({
  route,
}): ReactElement => {
  const project = route.params.project;
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: colors.primary,
        }}>
        <Header />
        <ProjectContent project={project} />
      </SafeAreaView>
      <ProjectSection />
      <ProjectSection />
      <ProjectSection />
      <ProjectSection />
    </>
  );
};

export default ProjectDetails;
