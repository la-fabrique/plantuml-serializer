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
import {
  isC4Boundary,
  isC4Component,
  isC4Container,
  isC4Person,
  isC4Relationship,
  isC4System,
} from './types.guard';

function serializeElement(element: UMLElement, indent = 0): string[] {
  let lines = [] as Array<string>;
  const label = element.label ? `, "${element.label}"` : '';
  let technology = '';
  let description = '';
  let link = '';
  let alias = '';
  let alias1 = '';
  let alias2 = '';
  let tags = '';
  const elementName = element.type_;

  if (isC4Container(element) || isC4Component(element)) {
    alias = element.alias || '';
    link = element.link ? `, $link="${element.link}"` : '';
    technology = element.technology ? `, "${element.technology}"` : '';
    description = element.description ? `, "${element.description}"` : '';
  } else if (isC4Person(element) || isC4System(element)) {
    alias = element.alias || '';
    link = element.link ? `, $link="${element.link}"` : '';
    description = element.description ? `, "${element.description}"` : '';
  } else if (isC4Relationship(element)) {
    alias1 = `${element.alias1}`;
    alias2 = `, ${element.alias2}`;
    description = element.description ? `, "${element.description}"` : '';
    technology = element.technology ? `, "${element.technology}"` : '';
  }

  if (isC4Boundary(element)) {
    alias = element.alias || '';
    tags = element.tags;
    lines.push(`${elementName}(${alias}${label}${tags}${link}) {`);
    element.elements.forEach((e) => {
      lines = lines.concat(serializeElement(e, indent + 1));
    });
    lines.push('}');
  } else {
    lines.push(
      indentString(
        `${elementName}(${alias}${alias1}${alias2}${label}${technology}${description}${link})`,
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
