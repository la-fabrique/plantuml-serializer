import {
  C4Workspace,
  serializerOptions,
  UMLElement,
  C4Person,
  C4System,
  C4Container,
  C4Component,
  C4Relationship,
  C4Boundary,
  C4_WORKSPACE_LAYOUT_TOP_DOWN,
} from './types';

function serializeElement(element: UMLElement, indent = 0): string[] {
  let lines = [] as Array<string>;
  const label = element.label ? `, "${element.label}"` : '';
  const link = element.link ? `, $link="${element.link}"` : '';
  const tags = element.tags || '';
  const elementName = element.type_;
  let technology = '';
  let description = '';
  let alias = '';
  let from = '';
  let to = '';

  if (element instanceof C4Container || element instanceof C4Component) {
    alias = element.alias || '';
    technology = element.technology ? `, "${element.technology}"` : '';
    description = element.description ? `, "${element.description}"` : '';
  } else if (element instanceof C4Person || element instanceof C4System) {
    alias = element.alias || '';
    description = element.description ? `, "${element.description}"` : '';
  } else if (element instanceof C4Relationship) {
    from = `${element.from}`;
    to = `, ${element.to}`;
    description = element.description ? `, "${element.description}"` : '';
    technology = element.technology ? `, "${element.technology}"` : '';
  }

  if (element instanceof C4Boundary) {
    alias = element.alias || '';
    lines.push(`${elementName}(${alias}${label}${tags}${link}) {`);
    element.elements.forEach((e) => {
      lines = lines.concat(serializeElement(e, indent + 1));
    });
    lines.push('}');
  } else {
    lines.push(
      indentString(
        `${elementName}(${alias}${from}${to}${label}${technology}${description}${link})`,
        indent,
      ),
    );
  }

  return lines;
}

function indentString(txt: string, count = 1) {
  const regex = /^/gm;
  return txt.replace(regex, '    '.repeat(count));
}

export default {
  serialize: (
    workspace: C4Workspace,
    options: serializerOptions = {
      eol: '\n',
    },
  ): string => {
    let lines = ['@startuml'];
    workspace.includes.forEach((include) => {
      lines.push(include);
    });
    if (workspace.title) {
      lines.push(`title ${workspace.title}`);
    }
    workspace.elements?.forEach((e) => {
      lines = lines.concat(serializeElement(e));
    });
    if (workspace.layout) {
      lines.push(workspace.layout || C4_WORKSPACE_LAYOUT_TOP_DOWN);
    }
    if (workspace.showLegend) {
      lines.push('SHOW_LEGEND()');
    }
    lines.push('@enduml');
    return lines.join(options.eol);
  },
};
