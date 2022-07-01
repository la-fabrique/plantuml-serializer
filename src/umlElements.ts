import type {
  C4BoundaryType,
  C4ComponentType,
  C4ContainerType,
  C4PersonType,
  C4RelationshipType,
  C4SystemType,
  UMLElement,
} from './types';

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
    public from: string,
    public to: string,
    public label: string,
    public technology: string = '',
    public description: string = '',
    public sprite: string = '',
    public tags: string = '',
    public link: string = '',
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
