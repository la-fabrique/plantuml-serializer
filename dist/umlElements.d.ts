import type { C4BoundaryType, C4ComponentType, C4ContainerType, C4PersonType, C4RelationshipType, C4SystemType, UMLElement } from './types';
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
    from: string;
    to: string;
    label: string;
    technology: string;
    description: string;
    sprite: string;
    tags: string;
    link: string;
    constructor(type_: C4RelationshipType, from: string, to: string, label: string, technology?: string, description?: string, sprite?: string, tags?: string, link?: string);
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
export {};
