import {
  C4Workspace,
  C4Container,
  C4_WORKSPACE_INCLUDE_CONTAINER,
  C4Boundary,
} from '@/index';

export default {
  includes: [C4_WORKSPACE_INCLUDE_CONTAINER],
  elements: [
    new C4Boundary(
      'System_Boundary',
      'systemBoundaryAlias',
      'Label',
      undefined,
      undefined,
      [
        new C4Container(
          'Container',
          'containerAlias1',
          'Label',
          'Technology',
          'Optional Description',
        ),
      ],
    ),
    new C4Boundary(
      'Enterprise_Boundary',
      'enterpriseBoundaryAlias',
      'Label',
      undefined,
      undefined,
      [
        new C4Container(
          'Container',
          'containerAlias2',
          'Label',
          'Technology',
          'Optional Description',
        ),
      ],
    ),
    new C4Boundary('Boundary', 'boundaryAlias', 'Label', undefined, undefined, [
      new C4Container(
        'Container',
        'containerAlias3',
        'Label',
        'Technology',
        'Optional Description',
      ),
    ]),
    new C4Boundary(
      'Container_Boundary',
      'containerBoundaryAlias',
      'Label',
      undefined,
      undefined,
      [
        new C4Container(
          'Container',
          'containerAlias4',
          'Label',
          'Technology',
          'Optional Description',
        ),
      ],
    ),
  ],
} as C4Workspace;
