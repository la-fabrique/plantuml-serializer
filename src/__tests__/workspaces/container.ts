import {
  C4Workspace,
  C4_WORKSPACE_INCLUDE_CONTAINER,
  C4Container,
} from '@/index';

export default {
  includes: [C4_WORKSPACE_INCLUDE_CONTAINER],
  elements: [
    new C4Container(
      'Container',
      'containerAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new C4Container(
      'Container_Ext',
      'containerExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new C4Container(
      'ContainerDb',
      'containerDbAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new C4Container(
      'ContainerDb_Ext',
      'containerDbExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new C4Container(
      'ContainerQueue',
      'containerQueueAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new C4Container(
      'ContainerQueue_Ext',
      'containerQueueExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
  ],
} as C4Workspace;
