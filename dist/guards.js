export const isC4Container = (element) => [
    'ContainerQueue_Ext',
    'ContainerQueue',
    'ContainerDb_Ext',
    'ContainerDb',
    'Container_Ext',
    'Container',
].includes(element.type_);
export const isC4Component = (element) => [
    'ComponentQueue_Ext',
    'ComponentQueue',
    'ComponentDb_Ext',
    'ComponentDb',
    'Component_Ext',
    'Component',
].includes(element.type_);
export const isC4System = (element) => [
    'System',
    'System_Ext',
    'SystemDb',
    'SystemQueue',
    'SystemDb_Ext',
    'SystemQueue_Ext',
].includes(element.type_);
export const isC4Boundary = (element) => [
    'Boundary',
    'Enterprise_Boundary',
    'System_Boundary',
    'Container_Boundary',
].includes(element.type_);
export const isC4Relationship = (element) => [
    'Rel',
    'Rel_U',
    'Rel_Up',
    'Rel_D',
    'Rel_Down',
    'Rel_L',
    'Rel_Left',
    'Rel_R',
    'Rel_Right',
    'Rel_Back_Neighbor',
    'Rel_Back',
    'Rel_Neighbor',
    'BiRel',
].includes(element.type_);
export const isC4Person = (element) => ['Person', 'Person_Ext'].includes(element.type_);
//# sourceMappingURL=guards.js.map