import { C4Container, C4_WORKSPACE_INCLUDE_COMPONENT, C4System, C4Boundary, C4Component, C4Relationship, } from '../../index';
export default {
    title: 'Component diagram for Internet Banking System - API Application',
    includes: [C4_WORKSPACE_INCLUDE_COMPONENT],
    showLegend: true,
    elements: [
        new C4Container('Container', 'spa', 'Single Page Application', 'javascript and angular', 'Provides all the internet banking functionality to customers via their web browser.'),
        new C4Container('Container', 'ma', 'Mobile App', 'Xamarin', 'Provides a limited subset ot the internet banking functionality to customers via their mobile mobile device.'),
        new C4Container('ContainerDb', 'db', 'Database', 'Relational Database Schema', 'Stores user registration information, hashed authentication credentials, access logs, etc.'),
        new C4System('System_Ext', 'mbs', 'Mainframe Banking System', 'Stores all of the core banking information about customers, accounts, transactions, etc.'),
        new C4Boundary('Container_Boundary', 'api', 'API Application', undefined, undefined, [
            new C4Component('Component', 'sign', 'Sign In Controller', 'MVC Rest Controlle', 'Allows users to sign in to the internet banking system'),
            new C4Component('Component', 'accounts', 'Accounts Summary Controller', 'MVC Rest Controller', 'Provides customers with a summary of their bank accounts'),
            new C4Component('Component', 'security', 'Security Component', 'Spring Bean', 'Provides functionality related to singing in, changing passwords, etc.'),
            new C4Component('Component', 'mbsfacade', 'Mainframe Banking System Facade', 'Spring Bean', 'A facade onto the mainframe banking system.'),
        ]),
        new C4Relationship('Rel', 'sign', 'security', 'Uses'),
        new C4Relationship('Rel', 'accounts', 'mbsfacade', 'Uses'),
        new C4Relationship('Rel', 'security', 'db', 'Read & write to', 'JDBC'),
        new C4Relationship('Rel', 'mbsfacade', 'mbs', 'Uses', 'XML/HTTPS'),
        new C4Relationship('Rel', 'spa', 'sign', 'Uses', 'JSON/HTTPS'),
        new C4Relationship('Rel', 'spa', 'accounts', 'Uses', 'JSON/HTTPS'),
        new C4Relationship('Rel', 'ma', 'sign', 'Uses', 'JSON/HTTPS'),
        new C4Relationship('Rel', 'ma', 'accounts', 'Uses', 'JSON/HTTPS'),
    ],
};
//# sourceMappingURL=C4ComponentDiagramBigbank.js.map