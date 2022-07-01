import fs from 'fs';
import serializer from '../index';
import { EOL } from 'os';
export function ExpectStringMatching(pumlFile, workspace) {
    const buffer = fs.readFileSync(pumlFile);
    const txt = buffer.toString();
    const txtSerilized = serializer.serialize(workspace, { eol: EOL });
    expect(txtSerilized).toEqual(txt);
}
//# sourceMappingURL=util.js.map