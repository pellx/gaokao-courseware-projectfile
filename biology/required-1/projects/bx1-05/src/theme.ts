import {continueRender, delayRender, staticFile} from 'remotion';

// Warm palette on pure white. Deliberately no blues or purples.
export const C = {
	bg: '#ffffff',
	text: '#222222',
	black: '#222222',
	muted: '#6f6a64',
	line: '#e7e1d8',
	panel: '#faf7f2',
	red: '#d6402f',
	redSoft: '#fdecea',
	orange: '#ee8a1f',
	orangeSoft: '#fff3e3',
	green: '#2f9a4f',
	greenSoft: '#e9f6ec',
	gold: '#d9a300',
	brown: '#8a5a2b',
	template: '#3b3b3b',
};

export const FONT = '"Noto Sans SC", sans-serif';

export const clamp = {
	extrapolateLeft: 'clamp',
	extrapolateRight: 'clamp',
} as const;

// Load the bundled Chinese font before any frame is captured.
if (typeof document !== 'undefined') {
	const handle = delayRender('Loading Noto Sans SC');
	const face = new FontFace('Noto Sans SC', `url(${staticFile('fonts/NotoSansSC.ttf')}) format('truetype')`, {
		weight: '100 900',
	});
	face
		.load()
		.then(() => {
			document.fonts.add(face);
			continueRender(handle);
		})
		.catch((err) => {
			console.error(err);
			continueRender(handle);
		});
}
