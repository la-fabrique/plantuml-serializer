import type { UMLElement } from './types';
import type { C4Container, C4Component, C4System, C4Boundary, C4Relationship, C4Person } from './umlElements';
export declare const isC4Container: (element: UMLElement) => element is C4Container;
export declare const isC4Component: (element: UMLElement) => element is C4Component;
export declare const isC4System: (element: UMLElement) => element is C4System;
export declare const isC4Boundary: (element: UMLElement) => element is C4Boundary;
export declare const isC4Relationship: (element: UMLElement) => element is C4Relationship;
export declare const isC4Person: (element: UMLElement) => element is C4Person;
