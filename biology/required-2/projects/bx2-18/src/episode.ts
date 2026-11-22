import data from './episode.json';
import type {SUBJECT} from './components/CoverLayout';

// Typed view of episode.json: everything about an episode that isn't scene code.
type Title = [string, boolean?][];

export type Episode = {
	id: string;
	title: string;
	subject: keyof typeof SUBJECT;
	book: string;
	// Short 考点 names, shown on the intro and the covers.
	points: string[];
	intro: {badge: string; title: Title; subtitle: string; photo: string; photoCaption: string; photoPos?: string};
	cover: {badge: string; title: Title[]; kicker?: string; photo: string; photoPos?: string | {[size: string]: string}; photoTag: string; credit: string};
	review: {
		// Six true/false statements, read two per narration line rv2–rv4.
		items: {q: string; ok: boolean; fix: string}[];
		endTitle: Title;
		endLine: string;
		slogan: string;
	};
	credits: string;
};

export const EP = data as unknown as Episode;
