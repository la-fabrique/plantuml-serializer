export const C4_WORKSPACE_INCLUDE_CONTAINER = '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml';
export const C4_WORKSPACE_INCLUDE_CONTEXT = '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml';
export const C4_WORKSPACE_INCLUDE_COMPONENT = '!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml';
export const C4_WORKSPACE_LAYOUT_TOP_DOWN = 'LAYOUT_TOP_DOWN()';
export const C4_WORKSPACE_LAYOUT_LEFT_RIGHT = 'LAYOUT_LEFT_RIGHT()';
export const C4_WORKSPACE_LAYOUT_LANDSCAPE = 'LAYOUT_LANDSCAPE()';
const EOL_L = '\n';
const EOL_RN = '\r\n';
class C4ContextBase {
    type_;
    alias;
    label;
    description;
    sprite;
    tags;
    link;
    constructor(type_, alias, label, description = '', sprite = '', tags = '', link = '') {
        this.type_ = type_;
        this.alias = alias;
        this.label = label;
        this.description = description;
        this.sprite = sprite;
        this.tags = tags;
        this.link = link;
        this.description = description;
        this.sprite = sprite;
        this.tags = tags;
        this.link = link;
    }
}
class C4ContainerOrComponentBase {
    type_;
    alias;
    label;
    technology;
    description;
    sprite;
    tags;
    link;
    constructor(type_, alias, label, technology = '', description = '', sprite = '', tags = '', link = '') {
        this.type_ = type_;
        this.alias = alias;
        this.label = label;
        this.technology = technology;
        this.description = description;
        this.sprite = sprite;
        this.tags = tags;
        this.link = link;
        this.technology = technology;
        this.description = description;
        this.sprite = sprite;
        this.tags = tags;
        this.link = link;
    }
}
export class C4Person extends C4ContextBase {
}
export class C4System extends C4ContextBase {
}
export class C4Container extends C4ContainerOrComponentBase {
}
export class C4Component extends C4ContainerOrComponentBase {
}
export class C4Relationship {
    type_;
    alias1;
    alias2;
    label;
    technology;
    description;
    constructor(type_, alias1, alias2, label, technology = '', description = '') {
        this.type_ = type_;
        this.alias1 = alias1;
        this.alias2 = alias2;
        this.label = label;
        this.technology = technology;
        this.description = description;
        this.technology = technology;
        this.description = description;
    }
}
export class C4Boundary {
    type_;
    alias;
    label;
    tags;
    link;
    elements;
    constructor(type_, alias, label, tags = '', link = '', elements) {
        this.type_ = type_;
        this.alias = alias;
        this.label = label;
        this.tags = tags;
        this.link = link;
        this.elements = elements;
        this.tags = tags;
        this.link = link;
    }
}
//# sourceMappingURL=types.js.map