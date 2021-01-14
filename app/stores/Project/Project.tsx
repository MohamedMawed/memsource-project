import {types} from 'mobx-state-tree';

const Project = types.model('Project', {
  id: types.string,
  name: types.string,
  sourceLang: types.string,
  targetLangs: types.array(types.string),
  status: types.string,
  internalId: types.number,
  dateDue: types.maybeNull(types.string),
  client: types.maybeNull(types.string),
  owner: types.model({
    userName: types.string,
  }),
});

export default Project;
