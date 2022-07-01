import {
  C4Person,
  C4_WORKSPACE_INCLUDE_CONTEXT,
  C4Workspace,
  C4System,
  C4Boundary,
  C4Relationship,
  C4_WORKSPACE_LAYOUT_LANDSCAPE,
} from '../../index';

export default {
  title: 'System Landscape diagram for Big Bank plc',
  includes: [C4_WORKSPACE_INCLUDE_CONTEXT],
  showLegend: true,
  layout: C4_WORKSPACE_LAYOUT_LANDSCAPE,
  elements: [
    new C4Person(
      'Person',
      'customer',
      'Personal Banking Customer',
      'A customer of the bank, with personal bank accounts.',
    ),
    new C4Boundary(
      'Enterprise_Boundary',
      'c0',
      'Big Bank plc',
      undefined,
      undefined,
      [
        new C4System(
          'System',
          'banking_system',
          'Internet Banking System',
          'Allows customers to view information about their bank accounts, and make payments.',
        ),
        new C4System(
          'System_Ext',
          'atm',
          'ATM',
          'Allows customers to withdraw cash.',
        ),
        new C4System(
          'System_Ext',
          'mail_system',
          'E-mail system',
          'The internal Microsoft Exchange e-mail system.',
        ),
        new C4System(
          'System_Ext',
          'mainframe',
          'Mainframe Banking System',
          'Stores all of the core banking information about customers, accounts, transactions, etc.',
        ),
        new C4Person(
          'Person_Ext',
          'customer_service',
          'Customer Service Staff',
          'Customer service staff within the bank.',
        ),
        new C4Person(
          'Person_Ext',
          'back_office',
          'Back Office Staff',
          'Administration and support staff within the bank.',
        ),
      ],
    ),
    new C4Relationship('Rel_Neighbor', 'customer', 'banking_system', 'Uses'),
    new C4Relationship('Rel_R', 'customer', 'atm', 'Withdraws cash using'),
    new C4Relationship(
      'Rel_Back',
      'customer',
      'mail_system',
      'Sends e-mails to',
    ),
    new C4Relationship(
      'Rel_R',
      'customer',
      'customer_service',
      'Asks questions to',
      'Telephone',
    ),
    new C4Relationship(
      'Rel_D',
      'banking_system',
      'mail_system',
      'Sends e-mail using',
    ),
    new C4Relationship('Rel_R', 'atm', 'mainframe', 'Uses'),
    new C4Relationship('Rel_R', 'banking_system', 'mainframe', 'Uses'),
    new C4Relationship('Rel_D', 'customer_service', 'mainframe', 'Uses'),
    new C4Relationship('Rel_U', 'back_office', 'mainframe', 'Uses'),
  ],
} as C4Workspace;
