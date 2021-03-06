import { C4Container, C4Person, C4_WORKSPACE_INCLUDE_CONTAINER, C4System, C4Boundary, C4Relationship, } from '../../index';
export default {
    title: 'Container diagram for Internet Banking System',
    includes: [C4_WORKSPACE_INCLUDE_CONTAINER],
    showLegend: true,
    elements: [
        new C4Person('Person', 'customer', 'Customer', 'A customer of the bank, with personal bank accounts'),
        new C4Boundary('System_Boundary', 'c1', 'Internet Banking', undefined, undefined, [
            new C4Container('Container', 'web_app', 'Web Application', 'Java, Spring MVC', 'Delivers the static content and the Internet banking SPA'),
            new C4Container('Container', 'spa', 'Single-Page App', 'JavaScript, Angular', 'Provides all the Internet banking functionality to cutomers via their web browser'),
            new C4Container('Container', 'mobile_app', 'Mobile App', 'C#, Xamarin', 'Provides a limited subset of the Internet banking functionality to customers via their mobile device'),
            new C4Container('ContainerDb', 'database', 'Database', 'SQL Database', 'Stores user registration information, hashed auth credentials, access logs, etc.'),
            new C4Container('Container', 'backend_api', 'API Application', 'Java, Docker Container', 'Provides Internet banking functionality via API'),
        ]),
        new C4System('System_Ext', 'email_system', 'E-Mail System', 'The internal Microsoft Exchange system'),
        new C4System('System_Ext', 'banking_system', 'Mainframe Banking System', 'Stores all of the core banking information about customers, accounts, transactions, etc.'),
        new C4Relationship('Rel', 'customer', 'web_app', 'Uses', 'HTTPS'),
        new C4Relationship('Rel', 'customer', 'spa', 'Uses', 'HTTPS'),
        new C4Relationship('Rel', 'customer', 'mobile_app', 'Uses'),
        new C4Relationship('Rel_Neighbor', 'web_app', 'spa', 'Delivers'),
        new C4Relationship('Rel', 'spa', 'backend_api', 'Uses', 'async, JSON/HTTPS'),
        new C4Relationship('Rel', 'mobile_app', 'backend_api', 'Uses', 'async, JSON/HTTPS'),
        new C4Relationship('Rel_Back_Neighbor', 'database', 'backend_api', 'Reads from and writes to', 'sync, JDBC'),
        new C4Relationship('Rel_Back', 'customer', 'email_system', 'Sends e-mails to'),
        new C4Relationship('Rel_Back', 'email_system', 'backend_api', 'Sends e-mails using', 'sync, SMTP'),
        new C4Relationship('Rel_Neighbor', 'backend_api', 'banking_system', 'Uses', 'sync/async, XML/HTTPS'),
    ],
};
//# sourceMappingURL=C4ContainerDiagramBigbank.js.map