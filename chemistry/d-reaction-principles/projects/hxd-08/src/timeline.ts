import narration from './narration.json';
import voice from './voice.json';

// Scene timing is driven by the narration: each line starts once the previous
// clip has finished (plus GAP and any per-line `pause`), and a scene lasts
// `lead` + all its lines + `tail`. Scenes schedule their animations relative
// to these cues, so re-recording the voice re-times the whole video.

export const FPS = 30;
const GAP = 8;

type LineDef = {
	id: string;
	text: string;
	caption_text?: string;
	caption?: boolean;
	pause?: number;
};
type SceneDef = {lead: number; tail: number; lines: LineDef[]};

export type Cue = {
	id: string;
	from: number;
	to: number;
	// Caption text, with {word|color} highlight markup.
	text: string;
	caption: boolean;
};

export type SceneTimeline = {
	duration: number;
	lines: Cue[];
	cue: Record<string, Cue>;
};

const clips = voice as Record<string, {seconds: number}>;

const build = (s: SceneDef): SceneTimeline => {
	let t = s.lead;
	const lines = s.lines.map((l, i) => {
		t += (l.pause ?? 0) + (i > 0 ? GAP : 0);
		const clip = clips[l.id];
		if (!clip) throw new Error(`No voice clip for "${l.id}". Run: node scripts/voice.mjs`);
		const cue: Cue = {
			id: l.id,
			from: t,
			to: t + Math.ceil(clip.seconds * FPS),
			text: l.caption_text ?? l.text,
			caption: l.caption !== false,
		};
		t = cue.to;
		return cue;
	});
	return {
		duration: t + s.tail,
		lines,
		cue: Object.fromEntries(lines.map((c) => [c.id, c])),
	};
};

type SceneKey = keyof typeof narration;

export const T = Object.fromEntries(
	Object.entries(narration as Record<SceneKey, SceneDef>).map(([k, s]) => [k, build(s)]),
) as Record<SceneKey, SceneTimeline>;
