export const INCLUDE_C4_CONTAINER =
  '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml';
export const INCLUDE_C4_CONTEXT =
  '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml';
export const INCLUDE_C4_COMPONENT =
  '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml';

export type WorkspaceInclude =
  | typeof INCLUDE_C4_CONTEXT
  | typeof INCLUDE_C4_CONTAINER
  | typeof INCLUDE_C4_COMPONENT;

export type Workspace = {
  title?: string;
  includes: Array<WorkspaceInclude>;
  elements: Array<UMLElement>;
  showLegend?: boolean;
};

const EOL_L = '\n';
const EOL_RN = '\r\n';

export type EOL = typeof EOL_L | typeof EOL_RN;

export interface serializerOptions {
  eol: EOL;
}

// from https://github.com/Enteee/plantuml-parser
export type Stdlib_C4_Context_Type =
  | 'Person'
  | 'Person_Ext'
  | 'System'
  | 'System_Ext'
  | 'SystemDb'
  | 'SystemQueue'
  | 'SystemDb_Ext'
  | 'SystemQueue_Ext';

export class Stdlib_C4_Context {
  constructor(
    public type_: { source: string; name: Stdlib_C4_Context_Type },
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

export type Stdlib_C4_Container_Component_Type =
  | 'ContainerQueue_Ext'
  | 'ContainerQueue'
  | 'ContainerDb_Ext'
  | 'ContainerDb'
  | 'Container_Ext'
  | 'Container'
  | 'ComponentQueue_Ext'
  | 'ComponentQueue'
  | 'ComponentDb_Ext'
  | 'ComponentDb'
  | 'Component_Ext'
  | 'Component';

export class Stdlib_C4_Container_Component {
  constructor(
    public type_: { source: string; name: Stdlib_C4_Container_Component_Type },
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
export type C4_Rel_Direction =
  | '_U'
  | '_Up'
  | '_D'
  | '_Down'
  | '_L'
  | '_Left'
  | '_R'
  | '_Right';

export class Stdlib_C4_Rel {
  constructor(
    public type_: { source: string; name: string },
    public alias1: string,
    public alias2: string,
    public label: string,
    public direction?: C4_Rel_Direction,
    public technology: string = '',
    public description: string = '',
  ) {
    this.technology = technology;
    this.description = description;
  }
}

export type Stdlib_C4_Boundary_Type =
  | 'Boundary'
  | 'Enterprise_Boundary'
  | 'System_Boundary'
  | 'Container_Boundary';

export class Stdlib_C4_Boundary {
  constructor(
    public type_: { source: string; name: Stdlib_C4_Boundary_Type },
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
  | Stdlib_C4_Context
  | Stdlib_C4_Container_Component
  | Stdlib_C4_Boundary
  | Stdlib_C4_Rel;
