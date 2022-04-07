import { C4Workspace } from '@/types';
import fs from 'fs';
import serializer from '@/serializer';
import { EOL } from 'os';

export function ExpectStringMatching(pumlFile: string, workspace: C4Workspace) {
  const buffer = fs.readFileSync(pumlFile);
  const txt = buffer.toString();
  const txtSerilized = serializer.serialize(workspace, { eol: EOL });
  expect(txtSerilized).toEqual(txt);
}
