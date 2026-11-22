// node name-stills.mjs <project> <stills-dir>
// Renames <stills-dir>/element-N.jpeg to NNN-<line id>.jpeg, in the same order
// as STILL_FRAMES in src/Root.tsx (scene order from src/scenes/index.ts).
import {readdirSync, readFileSync, renameSync} from 'node:fs';
import {join} from 'node:path';

const dir = process.argv[2];
const narration = JSON.parse(readFileSync(join(dir, 'src/narration.json'), 'utf8'));
const order = [...readFileSync(join(dir, 'src/scenes/index.ts'), 'utf8').matchAll(/\['(\w+)',/g)].map((m) => m[1]);
const ids = order.flatMap((k) => narration[k].lines.map((l) => l.id));
const stills = process.argv[3];
const files = readdirSync(stills)
	.filter((f) => /^element-\d+\.jpe?g$/.test(f))
	.sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));
files.forEach((f, i) => renameSync(join(stills, f), join(stills, `${String(i).padStart(3, '0')}-${ids[i]}.jpeg`)));
console.log(`${files.length} stills in ${stills}`);
