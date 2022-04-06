export const C4_WORKSPACE_INCLUDE_CONTAINER =
  '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml';
export const C4_WORKSPACE_INCLUDE_CONTEXT =
  '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml';
export const C4_WORKSPACE_INCLUDE_COMPONENT =
  '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml';
export const C4_WORKSPACE_LAYOUT_TOP_DOWN = 'LAYOUT_TOP_DOWN()';
export const C4_WORKSPACE_LAYOUT_LEFT_RIGHT = 'LAYOUT_LEFT_RIGHT()';
export const C4_WORKSPACE_LAYOUT_LANDSCAPE = 'LAYOUT_LANDSCAPE()';

export type C4WorkspaceInclude =
  | typeof C4_WORKSPACE_INCLUDE_CONTEXT
  | typeof C4_WORKSPACE_INCLUDE_CONTAINER
  | typeof C4_WORKSPACE_INCLUDE_COMPONENT;

export type C4Workspace = {
  title?: string;
  includes: Array<C4WorkspaceInclude>;
  elements: Array<UMLElement>;
  showLegend?: boolean;
  layout: C4Layout;
};

const EOL_L = '\n';
const EOL_RN = '\r\n';

export type EOL = typeof EOL_L | typeof EOL_RN;

export interface serializerOptions {
  eol: EOL;
}

// from https://github.com/Enteee/plantuml-parser
export type C4SystemType =
  | 'System'
  | 'System_Ext'
  | 'SystemDb'
  | 'SystemQueue'
  | 'SystemDb_Ext'
  | 'SystemQueue_Ext';
export type C4PersonType = 'Person' | 'Person_Ext';
export type C4ContainerType =
  | 'ContainerQueue_Ext'
  | 'ContainerQueue'
  | 'ContainerDb_Ext'
  | 'ContainerDb'
  | 'Container_Ext'
  | 'Container';
export type C4ComponentType =
  | 'ComponentQueue_Ext'
  | 'ComponentQueue'
  | 'ComponentDb_Ext'
  | 'ComponentDb'
  | 'Component_Ext'
  | 'Component';
export type C4BoundaryType =
  | 'Boundary'
  | 'Enterprise_Boundary'
  | 'System_Boundary'
  | 'Container_Boundary';
export type C4RelationshipType =
  | 'Rel'
  | 'Rel_U'
  | 'Rel_Up'
  | 'Rel_D'
  | 'Rel_Down'
  | 'Rel_L'
  | 'Rel_Left'
  | 'Rel_R'
  | 'Rel_Right'
  | 'Rel_Back_Neighbor'
  | 'Rel_Back'
  | 'Rel_Neighbor'
  | 'BiRel';
export type C4Layout =
  | typeof C4_WORKSPACE_LAYOUT_TOP_DOWN
  | typeof C4_WORKSPACE_LAYOUT_LEFT_RIGHT
  | typeof C4_WORKSPACE_LAYOUT_LANDSCAPE;

class C4ContextBase<T extends C4PersonType | C4SystemType> {
  constructor(
    public type_: T,
    public alias: string,
    public label: string,
    public description: string = '',
    public sprite: string = '',
    public tags: string = '',
    public link: string = '',
  ) {
    this.description = description;
    this.sprite = sprite;
    this.tags = tags;
    this.link = link;
  }
}
class C4ContainerOrComponentBase<T extends C4ContainerType | C4ComponentType> {
  constructor(
    public type_: T,
    public alias: string,
    public label: string,
    public technology: string = '',
    public description: string = '',
    public sprite: string = '',
    public tags: string = '',
    public link: string = '',
  ) {
    this.technology = technology;
    this.description = description;
    this.sprite = sprite;
    this.tags = tags;
    this.link = link;
  }
}

export class C4Person extends C4ContextBase<C4PersonType> {}
export class C4System extends C4ContextBase<C4SystemType> {}
export class C4Container extends C4ContainerOrComponentBase<C4ContainerType> {}
export class C4Component extends C4ContainerOrComponentBase<C4ComponentType> {}
export class C4Relationship {
  constructor(
    public type_: C4RelationshipType,
    public alias1: string,
    public alias2: string,
    public label: string,
    public technology: string = '',
    public description: string = '',
  ) {
    this.technology = technology;
    this.description = description;
  }
}
export class C4Boundary {
  constructor(
    public type_: C4BoundaryType,
    public alias: string,
    public label: string,
    public tags: string = '',
    public link: string = '',
    public elements: UMLElement[],
  ) {
    this.tags = tags;
    this.link = link;
  }
}

export type UMLElement =
  | C4Person
  | C4System
  | C4Container
  | C4Component
  | C4Boundary
  | C4Relationship;
