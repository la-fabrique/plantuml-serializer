import { C4_WORKSPACE_INCLUDE_CONTEXT, C4System, } from '../../index';
export default {
    includes: [C4_WORKSPACE_INCLUDE_CONTEXT],
    elements: [
        new C4System('System', 'systemAlias', 'Label', 'Optional Description', undefined, undefined, 'https://github.com/plantuml-stdlib/C4-PlantUML'),
        new C4System('System_Ext', 'systemExtAlias', 'Label', 'Optional Description', undefined, undefined, 'https://github.com/plantuml-stdlib/C4-PlantUML'),
        new C4System('SystemDb', 'systemDbAlias', 'Label', 'Optional Description', undefined, undefined, 'https://github.com/plantuml-stdlib/C4-PlantUML'),
        new C4System('SystemDb_Ext', 'systemDbExtAlias', 'Label', 'Optional Description', undefined, undefined, 'https://github.com/plantuml-stdlib/C4-PlantUML'),
        new C4System('SystemQueue', 'systemQueueAlias', 'Label', 'Optional Description', undefined, undefined, 'https://github.com/plantuml-stdlib/C4-PlantUML'),
        new C4System('SystemQueue_Ext', 'systemQueueExtAlias', 'Label', 'Optional Description', undefined, 'v1.0', 'https://github.com/plantuml-stdlib/C4-PlantUML'),
    ],
};
//# sourceMappingURL=system.js.map