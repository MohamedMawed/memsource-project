import Loader from 'app/components/Loader/Loader';
import ProjectCard from 'app/components/ProjectCard/ProjectCard';
import ProjectStore from 'app/stores/Project/ProjectStore';
import {ProjectType} from 'app/types/ProjectTypes';
import {observer} from 'mobx-react';
import React, {FC, ReactElement, useEffect} from 'react';
import {FlatList} from 'react-native';

const Project: FC<void> = (): ReactElement => {
  const renderItem = ({item}: {item: ProjectType}) => {
    return <ProjectCard key={item.id} project={item} />;
  };

  useEffect(() => {
    ProjectStore.load();
  }, []);

  if (ProjectStore.loading) {
    return <Loader />;
  }
  return (
    <FlatList
      keyExtractor={(e, _) => `${e}`}
      data={ProjectStore.projects}
      renderItem={renderItem}
    />
  );
};

export default observer(Project);
