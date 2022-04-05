import { Workspace, INCLUDE_C4_CONTAINER, Stdlib_C4_Context } from '@/types';

export default {
  title: 'Workspace Person',
  includes: [INCLUDE_C4_CONTAINER],
  elements: [
    new Stdlib_C4_Context(
      { source: 'Stdlib_C4', name: 'Person' },
      'personAlias',
      'Label',
      'Optional Description',
    ),
    new Stdlib_C4_Context(
      { source: 'Stdlib_C4', name: 'Person_Ext' },
      'personExtAlias',
      'Label',
      'Optional Description',
    ),
  ],
} as Workspace;
