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
    from;
    to;
    label;
    technology;
    description;
    sprite;
    tags;
    link;
    constructor(type_, from, to, label, technology = '', description = '', sprite = '', tags = '', link = '') {
        this.type_ = type_;
        this.from = from;
        this.to = to;
        this.label = label;
        this.technology = technology;
        this.description = description;
        this.sprite = sprite;
        this.tags = tags;
        this.link = link;
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
//# sourceMappingURL=umlElements.js.map