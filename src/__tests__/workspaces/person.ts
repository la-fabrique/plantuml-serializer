import {
  C4Workspace,
  C4_WORKSPACE_INCLUDE_CONTAINER,
  C4Person,
} from '../../index';

export default {
  title: 'C4Workspace Person',
  includes: [C4_WORKSPACE_INCLUDE_CONTAINER],
  elements: [
    new C4Person('Person', 'personAlias', 'Label', 'Optional Description'),
    new C4Person(
      'Person_Ext',
      'personExtAlias',
      'Label',
      'Optional Description',
    ),
  ],
} as C4Workspace;
