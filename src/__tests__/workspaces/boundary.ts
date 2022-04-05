import {
  Workspace,
  Stdlib_C4_Container_Component,
  INCLUDE_C4_CONTAINER,
  Stdlib_C4_Boundary,
} from '@/types';

export default {
  includes: [INCLUDE_C4_CONTAINER],
  elements: [
    new Stdlib_C4_Boundary(
      { source: 'Stdlib_C4', name: 'System_Boundary' },
      'systemBoundaryAlias',
      'Label',
      undefined,
      undefined,
      [
        new Stdlib_C4_Container_Component(
          { source: 'Stdlib_C4', name: 'Container' },
          'containerAlias1',
          'Label',
          'Technology',
          'Optional Description',
        ),
      ],
    ),
    new Stdlib_C4_Boundary(
      { source: 'Stdlib_C4', name: 'Enterprise_Boundary' },
      'enterpriseBoundaryAlias',
      'Label',
      undefined,
      undefined,
      [
        new Stdlib_C4_Container_Component(
          { source: 'Stdlib_C4', name: 'Container' },
          'containerAlias2',
          'Label',
          'Technology',
          'Optional Description',
        ),
      ],
    ),
    new Stdlib_C4_Boundary(
      { source: 'Stdlib_C4', name: 'Boundary' },
      'boundaryAlias',
      'Label',
      undefined,
      undefined,
      [
        new Stdlib_C4_Container_Component(
          { source: 'Stdlib_C4', name: 'Container' },
          'containerAlias3',
          'Label',
          'Technology',
          'Optional Description',
        ),
      ],
    ),
    new Stdlib_C4_Boundary(
      { source: 'Stdlib_C4', name: 'Container_Boundary' },
      'containerBoundaryAlias',
      'Label',
      undefined,
      undefined,
      [
        new Stdlib_C4_Container_Component(
          { source: 'Stdlib_C4', name: 'Container' },
          'containerAlias4',
          'Label',
          'Technology',
          'Optional Description',
        ),
      ],
    ),
  ],
} as Workspace;
