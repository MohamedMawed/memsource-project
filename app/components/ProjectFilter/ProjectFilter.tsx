import Slider from '@react-native-community/slider';
import colors from 'app/theme/colors';
import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import styles from './styles';
export interface ProjectFilterProps {
  updateView: (arg0: string) => {};
}

const options = ['4', '8', '24', '72', 'Any due date'];
const ProjectFilter: React.SFC<ProjectFilterProps> = ({updateView}) => {
  const [filterValue, setFilterValue] = useState(options[options.length - 1]);

  return (
    <View style={styles.container}>
      <Menu style={styles.menuContainer}>
        <MenuTrigger
          customStyles={{
            triggerWrapper: styles.menuButton,
            triggerText: styles.menuText,
          }}
          text={`Due Date: ${filterValue}`}
        />
        <MenuOptions
          customStyles={{
            optionsWrapper: styles.menuWrapper,
            optionsContainer: styles.optionsWrapper,
          }}>
          {options.map((e) => (
            <MenuOption
              key={e}
              customStyles={{
                optionTouchable: {
                  activeOpacity: 40,
                },
                optionWrapper: styles.optionWrapper,
                optionText: styles.optionText,
              }}
              onSelect={() => {
                setFilterValue(e);
                updateView(e === options[options.length - 1] ? '0' : e);
              }}
              text={e}
            />
          ))}
        </MenuOptions>
      </Menu>
      <Slider
        style={styles.slider}
        minimumValue={0}
        step={1}
        maximumValue={72}
        value={parseInt(
          filterValue === options[options.length - 1] ? '0' : filterValue,
          10,
        )}
        onSlidingComplete={(value) => {
          const stringVal = `${value}`;
          setFilterValue(stringVal);
          updateView(stringVal);
        }}
        minimumTrackTintColor={colors.white}
        maximumTrackTintColor={colors.black}
        thumbTintColor={colors.white}
      />
    </View>
  );
};

export default ProjectFilter;
