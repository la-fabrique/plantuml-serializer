import {
  Workspace,
  INCLUDE_C4_COMPONENT,
  Stdlib_C4_Container_Component,
} from '@/types';

export default {
  includes: [INCLUDE_C4_COMPONENT],
  elements: [
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'Component' },
      'componentAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'Component_Ext' },
      'componentExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'ComponentDb' },
      'componentDbAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'ComponentDb_Ext' },
      'componentDbExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'ComponentQueue' },
      'componentQueueAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
    new Stdlib_C4_Container_Component(
      { source: 'Stdlib_C4', name: 'ComponentQueue_Ext' },
      'componentQueueExtAlias',
      'Label',
      'Technology',
      'Optional Description',
    ),
  ],
} as Workspace;
