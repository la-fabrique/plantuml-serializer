export declare const C4_WORKSPACE_INCLUDE_CONTAINER = "!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml";
export declare const C4_WORKSPACE_INCLUDE_CONTEXT = "!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml";
export declare const C4_WORKSPACE_INCLUDE_COMPONENT = "!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml";
export declare const C4_WORKSPACE_LAYOUT_TOP_DOWN = "LAYOUT_TOP_DOWN()";
export declare const C4_WORKSPACE_LAYOUT_LEFT_RIGHT = "LAYOUT_LEFT_RIGHT()";
export declare const C4_WORKSPACE_LAYOUT_LANDSCAPE = "LAYOUT_LANDSCAPE()";
export declare type C4WorkspaceInclude = typeof C4_WORKSPACE_INCLUDE_CONTEXT | typeof C4_WORKSPACE_INCLUDE_CONTAINER | typeof C4_WORKSPACE_INCLUDE_COMPONENT;
export declare type C4Workspace = {
    title?: string;
    includes: Array<C4WorkspaceInclude>;
    elements: Array<UMLElement>;
    showLegend?: boolean;
    layout: C4Layout;
};
declare const EOL_L = "\n";
declare const EOL_RN = "\r\n";
export declare type EOL = typeof EOL_L | typeof EOL_RN;
export interface serializerOptions {
    eol: EOL;
}
export declare type C4SystemType = 'System' | 'System_Ext' | 'SystemDb' | 'SystemQueue' | 'SystemDb_Ext' | 'SystemQueue_Ext';
export declare type C4PersonType = 'Person' | 'Person_Ext';
export declare type C4ContainerType = 'ContainerQueue_Ext' | 'ContainerQueue' | 'ContainerDb_Ext' | 'ContainerDb' | 'Container_Ext' | 'Container';
export declare type C4ComponentType = 'ComponentQueue_Ext' | 'ComponentQueue' | 'ComponentDb_Ext' | 'ComponentDb' | 'Component_Ext' | 'Component';
export declare type C4BoundaryType = 'Boundary' | 'Enterprise_Boundary' | 'System_Boundary' | 'Container_Boundary';
export declare type C4RelationshipType = 'Rel' | 'Rel_U' | 'Rel_Up' | 'Rel_D' | 'Rel_Down' | 'Rel_L' | 'Rel_Left' | 'Rel_R' | 'Rel_Right' | 'Rel_Back_Neighbor' | 'Rel_Back' | 'Rel_Neighbor' | 'BiRel';
export declare type C4Layout = typeof C4_WORKSPACE_LAYOUT_TOP_DOWN | typeof C4_WORKSPACE_LAYOUT_LEFT_RIGHT | typeof C4_WORKSPACE_LAYOUT_LANDSCAPE;
declare class C4ContextBase<T extends C4PersonType | C4SystemType> {
    type_: T;
    alias: string;
    label: string;
    description: string;
    sprite: string;
    tags: string;
    link: string;
    constructor(type_: T, alias: string, label: string, description?: string, sprite?: string, tags?: string, link?: string);
}
declare class C4ContainerOrComponentBase<T extends C4ContainerType | C4ComponentType> {
    type_: T;
    alias: string;
    label: string;
    technology: string;
    description: string;
    sprite: string;
    tags: string;
    link: string;
    constructor(type_: T, alias: string, label: string, technology?: string, description?: string, sprite?: string, tags?: string, link?: string);
}
export declare class C4Person extends C4ContextBase<C4PersonType> {
}
export declare class C4System extends C4ContextBase<C4SystemType> {
}
export declare class C4Container extends C4ContainerOrComponentBase<C4ContainerType> {
}
export declare class C4Component extends C4ContainerOrComponentBase<C4ComponentType> {
}
export declare class C4Relationship {
    type_: C4RelationshipType;
    alias1: string;
    alias2: string;
    label: string;
    technology: string;
    description: string;
    constructor(type_: C4RelationshipType, alias1: string, alias2: string, label: string, technology?: string, description?: string);
}
export declare class C4Boundary {
    type_: C4BoundaryType;
    alias: string;
    label: string;
    tags: string;
    link: string;
    elements: UMLElement[];
    constructor(type_: C4BoundaryType, alias: string, label: string, tags: string, link: string, elements: UMLElement[]);
}
export declare type UMLElement = C4Person | C4System | C4Container | C4Component | C4Boundary | C4Relationship;
export {};
