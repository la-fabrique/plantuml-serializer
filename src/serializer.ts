import { Stdlib_C4_Context, Stdlib_C4_Rel, Stdlib_C4_Boundary } from './types';
import {
  Workspace,
  serializerOptions,
  UMLElement,
  Stdlib_C4_Container_Component,
} from './types';

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
  let elementName = element.type_.name;

  if (element instanceof Stdlib_C4_Container_Component) {
    alias = element.alias || '';
    link = element.link ? `, $link="${element.link}"` : '';
    technology = element.technology ? `, "${element.technology}"` : '';
    description = element.description
      ? `, $descr="${element.description}"`
      : '';
  } else if (element instanceof Stdlib_C4_Context) {
    alias = element.alias || '';
    link = element.link ? `, $link="${element.link}"` : '';
    description = element.description ? `, "${element.description}"` : '';
  } else if (element instanceof Stdlib_C4_Rel) {
    elementName = `${elementName}${element.direction || ''}`;
    alias1 = `${element.alias1}`;
    alias2 = `, ${element.alias2}`;
    description = element.description ? `, "${element.description}"` : '';
    technology = element.technology ? `, "${element.technology}"` : '';
  }

  if (element instanceof Stdlib_C4_Boundary) {
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
    workspace: Workspace,
    options: serializerOptions = {
      eol: '\n',
    },
  ): string => {
    let lines = [
      workspace.title ? `@startuml ${workspace.title}` : '@startuml',
    ];
    workspace.includes.forEach((include) => {
      lines.push(include);
    });
    workspace.elements?.forEach((e) => {
      lines = lines.concat(serializeElement(e));
    });
    if (workspace.showLegend) {
      lines.push('LAYOUT_WITH_LEGEND()');
    }
    lines.push('@enduml');
    return lines.join(options.eol);
  },
};
