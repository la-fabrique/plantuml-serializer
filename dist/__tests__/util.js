import fs from 'fs';
import serializer from '@/serializer';
export function ExpectStringMatching(pumlFile, workspace) {
    const buffer = fs.readFileSync(pumlFile);
    const txt = buffer.toString();
    const txtSerilized = serializer.serialize(workspace);
    expect(txtSerilized).toEqual(txt);
}
//# sourceMappingURL=util.js.map