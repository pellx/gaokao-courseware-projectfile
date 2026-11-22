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
	['K/2', '二分之K'],
	['mol/L', '摩尔每升'],
	['g/mL', '克每毫升'],
	['mL', '毫升'],
	['C6H12O6', '葡萄糖'],
	['C3H6O3', '乳酸'],
	['C2H5OH', '酒精'],
	['H2^18O', '氧十八标记的水'],
	['C^18O2', '氧十八标记的二氧化碳'],
	['^18O', '氧十八'],
	['^14CO2', '碳十四标记的二氧化碳'],
	['^14C', '碳十四'],
	['^3H', '氚'],
	['^15N', '氮十五'],
	['^32P', '磷三十二'],
	['^35S', '硫三十五'],
	['H2O2', '过氧化氢'],
	['KNO3', '硝酸钾'],
	['SiO2', '二氧化硅'],
	['CaCO3', '碳酸钙'],
	['CuSO4', '硫酸铜'],
	['NaOH', '氢氧化钠'],
	['HCl', '盐酸'],
	['NaHCO3', '碳酸氢钠'],
	['HCO3^-', '碳酸氢根离子'],
	['H2CO3', '碳酸'],
	['NaCl', '氯化钠'],
	['Na^+', '钠离子'],
	['K^+', '钾离子'],
	['Cl^-', '氯离子'],
	['Ca^2+', '钙离子'],
	['Mg^2+', '镁离子'],
	['Fe^2+', '亚铁离子'],
	['Fe^3+', '铁离子'],
	['H^+', '氢离子'],
	['NH4^+', '铵根离子'],
	['NO3^-', '硝酸根离子'],
	['CO2', '二氧化碳'],
	['O2', '氧气'],
	['H2O', '水'],
	['A—P~P~P', 'A，P，P，P'],
	['[H]', '还原氢'],
	['C3', 'C三'],
	['C5', 'C五'],
	['pH', 'P H'],
];

// 苏丹Ⅲ -> 苏丹三, "3∶1" -> 3比1, "1/4" -> 4分之1, "m−18" -> m减18.
const numerals = (s) =>
	s
		.replace(/(\d)\s*[:∶]\s*(?=\d)/g, '$1比')
		.replace(/(\d+)\/(\d+)/g, '$2分之$1')
		.replace(/Ⅰ/g, '一')
		.replace(/Ⅱ/g, '二')
		.replace(/Ⅲ/g, '三')
		.replace(/Ⅳ/g, '四');

const spoken = (line) =>
	numerals(WORDS.reduce((s, [from, to]) => s.split(from).join(to), line.say ?? line.text))
		.replace(/\{([^|}]+)(\|\w+)?\}/g, '$1')
		.replace(/\s*～\s*/g, '到')
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

// node_modules may be in the project or shared further up (the repository root).
const remotion = (() => {
	for (let d = root; ; d = join(d, '..')) {
		const p = join(d, 'node_modules/.bin/remotion');
		if (existsSync(p)) return p;
		if (join(d, '..') === d) throw new Error('node_modules/.bin/remotion not found: run npm ci in the repository root');
	}
})();
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
