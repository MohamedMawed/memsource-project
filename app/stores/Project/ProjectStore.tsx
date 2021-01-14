import ApiServices from 'app/services/ApiServices';
import {flow, types} from 'mobx-state-tree';
import Project from './Project';

const Store = types
  .model('ProjectStore', {
    projects: types.array(Project),
    loading: false,
  })
  .actions((self) => ({
    load: flow(function* (dueDate: string) {
      self.loading = true;
      const queryParams = `dueInHours=${dueDate}`;
      const response = yield ApiServices.get('projects', queryParams);
      self.projects = response.data.content;
      self.loading = false;
    }),
  }));

// create an instance from a snapshot
export default Store.create({
  projects: [],
});
