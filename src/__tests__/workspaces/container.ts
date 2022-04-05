import {
  Workspace,
  INCLUDE_C4_CONTAINER,
  Stdlib_C4_Container_Component,
} from '@/types';

export default {
  includes: [INCLUDE_C4_CONTAINER],
  elements: [
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'Container' },
      'containerAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'Container_Ext' },
      'containerExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'ContainerDb' },
      'containerDbAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'ContainerDb_Ext' },
      'containerDbExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'ContainerQueue' },
      'containerQueueAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'ContainerQueue_Ext' },
      'containerQueueExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
  ],
} as Workspace;
