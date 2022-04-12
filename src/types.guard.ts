import {
  C4Boundary,
  C4Component,
  C4Container,
  C4Person,
  C4Relationship,
  C4System,
  UMLElement,
} from './types';

export const isC4Container = (element: UMLElement): element is C4Container =>
  [
    'ContainerQueue_Ext',
    'ContainerQueue',
    'ContainerDb_Ext',
    'ContainerDb',
    'Container_Ext',
    'Container',
  ].includes((element as C4Container).type_);

export const isC4Component = (element: UMLElement): element is C4Component =>
  [
    'ComponentQueue_Ext',
    'ComponentQueue',
    'ComponentDb_Ext',
    'ComponentDb',
    'Component_Ext',
    'Component',
  ].includes((element as C4Container).type_);

export const isC4System = (element: UMLElement): element is C4System =>
  [
    'System',
    'System_Ext',
    'SystemDb',
    'SystemQueue',
    'SystemDb_Ext',
    'SystemQueue_Ext',
  ].includes((element as C4System).type_);

export const isC4Boundary = (element: UMLElement): element is C4Boundary =>
  [
    'Boundary',
    'Enterprise_Boundary',
    'System_Boundary',
    'Container_Boundary',
  ].includes((element as C4Boundary).type_);

export const isC4Relationship = (
  element: UMLElement,
): element is C4Relationship =>
  [
    'Rel',
    'Rel_U',
    'Rel_Up',
    'Rel_D',
    'Rel_Down',
    'Rel_L',
    'Rel_Left',
    'Rel_R',
    'Rel_Right',
    'Rel_Back_Neighbor',
    'Rel_Back',
    'Rel_Neighbor',
    'BiRel',
  ].includes((element as C4Relationship).type_);

export const isC4Person = (element: UMLElement): element is C4Person =>
  ['Person', 'Person_Ext'].includes((element as C4Person).type_);
