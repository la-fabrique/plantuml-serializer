import {
  Workspace,
  Stdlib_C4_Context,
  INCLUDE_C4_CONTEXT,
  Stdlib_C4_Rel,
} from '@/types';

export default {
  includes: [INCLUDE_C4_CONTEXT],
  elements: [
    new Stdlib_C4_Context(
      { source: 'Stdlib_C4', name: 'Person' },
      'personAlias',
      'User',
    ),
    new Stdlib_C4_Context(
      { source: 'Stdlib_C4', name: 'Person' },
      'personAlias1',
      'User 1',
    ),
    new Stdlib_C4_Context(
      { source: 'Stdlib_C4', name: 'Person' },
      'personAlias2',
      'User 2',
    ),
    new Stdlib_C4_Context(
      { source: 'Stdlib_C4', name: 'Person' },
      'personAlias3',
      'User 3',
    ),
    new Stdlib_C4_Context(
      { source: 'Stdlib_C4', name: 'System' },
      'systemAlias',
      'System',
    ),
    new Stdlib_C4_Rel(
      { source: 'Stdlib_C4', name: 'Rel' },
      'personAlias2',
      'personAlias3',
      'informs',
      undefined,
      'courier',
      'Optional Description',
    ),
    new Stdlib_C4_Rel(
      { source: 'Stdlib_C4', name: 'Rel' },
      'personAlias',
      'personAlias2',
      'informs',
      '_L',
      'courier',
      'Optional Description',
    ),
    new Stdlib_C4_Rel(
      { source: 'Stdlib_C4', name: 'Rel' },
      'personAlias',
      'personAlias3',
      'informs',
      '_R',
      'courier',
      'Optional Description',
    ),
    new Stdlib_C4_Rel(
      { source: 'Stdlib_C4', name: 'Rel' },
      'personAlias',
      'personAlias3',
      'informs',
      '_U',
      'courier',
      'Optional Description',
    ),
    new Stdlib_C4_Rel(
      { source: 'Stdlib_C4', name: 'Rel' },
      'personAlias1',
      'systemAlias',
      'orders',
      '_R',
      'http',
      'Optional Description',
    ),
    new Stdlib_C4_Rel(
      { source: 'Stdlib_C4', name: 'Rel' },
      'personAlias',
      'personAlias1',
      'requests',
      '_D',
      'async message',
      'Optional Description',
    ),
  ],
} as Workspace;
