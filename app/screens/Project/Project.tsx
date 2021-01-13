import ProjectCard from 'app/components/ProjectCard/ProjectCard';
import React, {FC, ReactElement} from 'react';
import {FlatList} from 'react-native';

const Project: FC<void> = (): ReactElement => {
  const renderItem = ({item}: {item: number}) => {
    return <ProjectCard key={item} />;
  };
  return (
    <FlatList
      keyExtractor={(e, _) => `${e}`}
      data={[1, 2, 3, 4]}
      renderItem={renderItem}
    />
  );
};

export default Project;
