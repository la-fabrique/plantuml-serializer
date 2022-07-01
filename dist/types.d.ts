import type { C4_WORKSPACE_INCLUDE_COMPONENT, C4_WORKSPACE_INCLUDE_CONTAINER, C4_WORKSPACE_INCLUDE_CONTEXT, C4_WORKSPACE_LAYOUT_LANDSCAPE, C4_WORKSPACE_LAYOUT_LEFT_RIGHT, C4_WORKSPACE_LAYOUT_TOP_DOWN, EOL_L, EOL_RN } from './constants';
import type { C4Boundary, C4Component, C4Container, C4Person, C4Relationship, C4System } from './umlElements';
export declare type C4WorkspaceInclude = typeof C4_WORKSPACE_INCLUDE_CONTEXT | typeof C4_WORKSPACE_INCLUDE_CONTAINER | typeof C4_WORKSPACE_INCLUDE_COMPONENT;
export declare type C4Workspace = {
    title?: string;
    includes: Array<C4WorkspaceInclude>;
    elements: Array<UMLElement>;
    showLegend?: boolean;
    layout: C4Layout;
};
export declare type EOL = typeof EOL_L | typeof EOL_RN;
export interface serializerOptions {
    eol: EOL | string;
}
export declare type C4SystemType = 'System' | 'System_Ext' | 'SystemDb' | 'SystemQueue' | 'SystemDb_Ext' | 'SystemQueue_Ext';
export declare type C4PersonType = 'Person' | 'Person_Ext';
export declare type C4ContainerType = 'ContainerQueue_Ext' | 'ContainerQueue' | 'ContainerDb_Ext' | 'ContainerDb' | 'Container_Ext' | 'Container';
export declare type C4ComponentType = 'ComponentQueue_Ext' | 'ComponentQueue' | 'ComponentDb_Ext' | 'ComponentDb' | 'Component_Ext' | 'Component';
export declare type C4BoundaryType = 'Boundary' | 'Enterprise_Boundary' | 'System_Boundary' | 'Container_Boundary';
export declare type C4RelationshipType = 'Rel' | 'Rel_U' | 'Rel_Up' | 'Rel_D' | 'Rel_Down' | 'Rel_L' | 'Rel_Left' | 'Rel_R' | 'Rel_Right' | 'Rel_Back_Neighbor' | 'Rel_Back' | 'Rel_Neighbor' | 'BiRel';
export declare type C4Layout = typeof C4_WORKSPACE_LAYOUT_TOP_DOWN | typeof C4_WORKSPACE_LAYOUT_LEFT_RIGHT | typeof C4_WORKSPACE_LAYOUT_LANDSCAPE;
export declare type UMLElement = C4Person | C4System | C4Container | C4Component | C4Boundary | C4Relationship;
