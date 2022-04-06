import { C4Workspace } from '@/types';
import fs from 'fs';
import serializer from '@/serializer';

export function ExpectStringMatching(pumlFile: string, workspace: C4Workspace) {
  const buffer = fs.readFileSync(pumlFile);
  const txt = buffer.toString();
  const txtSerilized = serializer.serialize(workspace);
  expect(txtSerilized).toEqual(txt);
}
