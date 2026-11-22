// Generates one MP3 per narration line with Microsoft neural TTS through the
// edge-tts CLI (https://github.com/rany2/edge-tts), and records each clip's
// length in src/voice.json. Only lines whose spoken text (or voice) changed are
// re-rendered. The narration text is sent to Microsoft's speech service.
//
//   node scripts/voice.mjs [--force]
//
// EDGE_TTS overrides the edge-tts executable (default: ~/.local/edge-tts-venv).
// TTS_VOICE overrides the voice, e.g. zh-CN-YunxiNeural for a male voice.
import {execFileSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {homedir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const edgeTts = process.env.EDGE_TTS ?? join(homedir(), '.local/edge-tts-venv/bin/edge-tts');
const voice = process.env.TTS_VOICE ?? 'zh-CN-XiaoxiaoNeural';
const force = process.argv.includes('--force');

const narration = JSON.parse(readFileSync(join(root, 'src/narration.json'), 'utf8'));
const outDir = join(root, 'public/voice');
const metaPath = join(root, 'src/voice.json');
const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : {};
mkdirSync(outDir, {recursive: true});

// Caption text -> what the voice should read: drop highlight markup and spell
// out symbols the way a teacher would say them.
// Formulas as written in narration.json (see components/chem.tsx) -> words.
const WORDS = [
	['mol/L', '摩尔每升'],
	['mL', '毫升'],
	['NaOH', '氢氧化钠'],
	['HCl', '盐酸'],
	['NaHCO3', '碳酸氢钠'],
	['HCO3^-', '碳酸氢根离子'],
	['H2CO3', '碳酸'],
	['HPO4^2-', '磷酸氢根离子'],
	['H2PO4^-', '磷酸二氢根离子'],
	['NaCl', '氯化钠'],
	['Na^+', '钠离子'],
	['K^+', '钾离子'],
	['Cl^-', '氯离子'],
	['Ca^2+', '钙离子'],
	['H^+', '氢离子'],
	['CO2', '二氧化碳'],
	['O2', '氧气'],
	['H2O', '水'],
];

const spoken = (line) =>
	WORDS.reduce((s, [from, to]) => s.split(from).join(to), line.say ?? line.text)
		.replace(/\{([^|}]+)(\|\w+)?\}/g, '$1')
		.replace(/\s*[～~]\s*/g, '到')
		.replace(/ΔH/g, '德尔塔H')
		.replace(/kJ\/mol/g, '千焦每摩尔')
		.replace(/kJ/g, '千焦')
		.replace(/\bmol\b/g, '摩尔')
		.replace(/℃/g, '摄氏度')
		.replace(/\s*=\s*/g, '等于')
		.replace(/\s+\+\s+/g, '加')
		.replace(/\s+[−-]\s+/g, '减')
		.replace(/−(?=\d)/g, '负')
		.replace(/\s*×\s*/g, '乘')
		.replace(/\s*>\s*/g, '大于')
		.replace(/\s*<\s*/g, '小于');

const remotion = join(root, 'node_modules/.bin/remotion');
const seconds = (file) =>
	parseFloat(
		execFileSync(remotion, ['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], {
			encoding: 'utf8',
		}),
	);

const key = (l) => `${voice}|${spoken(l)}`;
const lines = Object.values(narration).flatMap((s) => s.lines);
const todo = lines.filter((l) => force || !existsSync(join(outDir, `${l.id}.mp3`)) || meta[l.id]?.key !== key(l));

for (const [i, l] of todo.entries()) {
	execFileSync(edgeTts, ['--voice', voice, '--text', spoken(l), '--write-media', join(outDir, `${l.id}.mp3`)], {
		stdio: ['ignore', 'ignore', 'inherit'],
	});
	process.stdout.write(`\r${i + 1}/${todo.length} ${l.id}   `);
}
if (todo.length) process.stdout.write('\n');

const next = {};
for (const l of lines) {
	next[l.id] = {key: key(l), seconds: +seconds(join(outDir, `${l.id}.mp3`)).toFixed(3)};
}
writeFileSync(metaPath, JSON.stringify(next, null, '\t') + '\n');
console.log(`${todo.length} clip(s) generated with ${voice}; ${lines.length} total, ${lines.reduce((s, l) => s + next[l.id].seconds, 0).toFixed(1)}s of speech.`);
