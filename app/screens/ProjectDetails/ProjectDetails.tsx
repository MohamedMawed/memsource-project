import React, {FC, ReactElement} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from 'app/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TouchableCrossPlatform from 'app/components/Button/Button';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableCrossPlatform>
        <Ionicons name="arrow-back" size={26} color={colors.white} />
      </TouchableCrossPlatform>
      <View style={styles.headerActionsContainer}>
        <TouchableCrossPlatform style={{marginRight: 15}}>
          <AntDesign name="plus" size={25} color={colors.white} />
        </TouchableCrossPlatform>
        <TouchableCrossPlatform>
          <Entypo name="dots-three-vertical" size={20} color={colors.white} />
        </TouchableCrossPlatform>
      </View>
    </View>
  );
};

const InfoRow = () => {
  return (
    <View style={styles.infoRowContainer}>
      <Text style={styles.infoRowTitle}>Source Language</Text>
      <Text style={styles.infoRowValue}>ar</Text>
    </View>
  );
};

const ProjectContent = () => {
  return (
    <View style={styles.projectContentContainer}>
      <View style={styles.projectIconContainer}>
        <Octicons name="file-directory" size={30} color={colors.white} />
      </View>
      <Text style={styles.projectTitle}>Project title</Text>
      <InfoRow />
      <InfoRow />
      <InfoRow />
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
          <Text style={{fontSize: 16}}>Jobs</Text>
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
const ProjectDetails: FC<void> = (): ReactElement => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: colors.primary,
        }}>
        <Header />
        <ProjectContent />
      </SafeAreaView>
      <ProjectSection />
      <ProjectSection />
      <ProjectSection />
      <ProjectSection />
    </>
  );
};

export default ProjectDetails;
