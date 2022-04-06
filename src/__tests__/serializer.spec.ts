import { ExpectStringMatching } from './util';
import path from 'path';
import workspace from './workspaces/workspace';
import person from './workspaces/person';
import system from './workspaces/system';
import container from './workspaces/container';
import component from './workspaces/component';
import relationship from './workspaces/relationship';
import boundary from './workspaces/boundary';
import C4ComponentDiagramBigbank from './bigbank/C4ComponentDiagramBigbank';
import C4ContainerDiagramBigbank from './bigbank/C4ContainerDiagramBigbank';
import C4ContextDiagramBigbank from './bigbank/C4ContextDiagramBigbank';
describe('GIVEN serializer', () => {
  test('WHEN serialize workspace.ts THEN match workspace.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'workspaces', 'workspace.puml'),
      workspace,
    );
  });
  test('WHEN serialize person.ts THEN match person.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'workspaces', 'person.puml'),
      person,
    );
  });
  test('WHEN serialize system.ts THEN match system.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'workspaces', 'system.puml'),
      system,
    );
  });
  test('WHEN serialize container.ts THEN match container.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'workspaces', 'container.puml'),
      container,
    );
  });
  test('WHEN serialize component.ts THEN match component.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'workspaces', 'component.puml'),
      component,
    );
  });
  test('WHEN serialize relationship.ts THEN match relationship.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'workspaces', 'relationship.puml'),
      relationship,
    );
  });
  test('WHEN serialize boundary.ts THEN match boundary.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'workspaces', 'boundary.puml'),
      boundary,
    );
  });
  test('WHEN serialize C4ComponentDiagramBigbank.ts THEN match C4ComponentDiagramBigbank.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'bigbank', 'C4ComponentDiagramBigbank.puml'),
      C4ComponentDiagramBigbank,
    );
  });
  test('WHEN serialize C4ContainerDiagramBigbank.ts THEN match C4ContainerDiagramBigbank.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'bigbank', 'C4ContainerDiagramBigbank.puml'),
      C4ContainerDiagramBigbank,
    );
  });
  test('WHEN serialize C4ContextDiagramBigbank.ts THEN match C4ContextDiagramBigbank.puml', () => {
    ExpectStringMatching(
      path.resolve(__dirname, 'bigbank', 'C4ContextDiagramBigbank.puml'),
      C4ContextDiagramBigbank,
    );
  });
});
