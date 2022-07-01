import { C4Person, C4System, C4_WORKSPACE_INCLUDE_CONTEXT, C4Relationship, } from '../../index';
export default {
    includes: [C4_WORKSPACE_INCLUDE_CONTEXT],
    elements: [
        new C4Person('Person', 'personAlias', 'User'),
        new C4Person('Person', 'personAlias1', 'User 1'),
        new C4Person('Person', 'personAlias2', 'User 2'),
        new C4Person('Person', 'personAlias3', 'User 3'),
        new C4System('System', 'systemAlias', 'System'),
        new C4Relationship('Rel', 'personAlias2', 'personAlias3', 'informs', 'courier', 'Optional Description', undefined, 'v1.0', 'https://github.com/plantuml-stdlib/C4-PlantUML'),
        new C4Relationship('Rel_L', 'personAlias', 'personAlias2', 'informs', 'courier', 'Optional Description'),
        new C4Relationship('Rel_R', 'personAlias', 'personAlias3', 'informs', 'courier', 'Optional Description'),
        new C4Relationship('Rel_U', 'personAlias', 'personAlias3', 'informs', 'courier', 'Optional Description'),
        new C4Relationship('Rel_R', 'personAlias1', 'systemAlias', 'orders', 'http', 'Optional Description'),
        new C4Relationship('Rel_D', 'personAlias', 'personAlias1', 'requests', 'async message', 'Optional Description'),
    ],
};
//# sourceMappingURL=relationship.js.map