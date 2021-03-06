import { C4_WORKSPACE_INCLUDE_COMPONENT, C4Component, } from '../../index';
export default {
    includes: [C4_WORKSPACE_INCLUDE_COMPONENT],
    elements: [
        new C4Component('Component', 'componentAlias', 'Label', 'Technology', 'Optional Description', undefined, 'v1.0'),
        new C4Component('Component_Ext', 'componentExtAlias', 'Label', 'Technology', 'Optional Description'),
        new C4Component('ComponentDb', 'componentDbAlias', 'Label', 'Technology', 'Optional Description'),
        new C4Component('ComponentDb_Ext', 'componentDbExtAlias', 'Label', 'Technology', 'Optional Description'),
        new C4Component('ComponentQueue', 'componentQueueAlias', 'Label', 'Technology', 'Optional Description'),
        new C4Component('ComponentQueue_Ext', 'componentQueueExtAlias', 'Label', 'Technology', 'Optional Description'),
    ],
};
//# sourceMappingURL=component.js.map