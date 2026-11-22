import React from 'react';
import {AbsoluteFill, Composition, Freeze, Series, Still, useCurrentFrame} from 'remotion';
import './theme';
import {Cover} from './Cover';
import {SCENES} from './scenes';
import {T} from './timeline';

const DURS = SCENES.map(([key]) => T[key].duration);
const TOTAL = DURS.reduce((sum, d) => sum + d, 0);

const Video: React.FC = () => (
	<AbsoluteFill style={{backgroundColor: '#ffffff'}}>
		<Series>
			{SCENES.map(([key, SceneComp], i) => (
				<Series.Sequence key={key} durationInFrames={DURS[i]}>
					<SceneComp />
				</Series.Sequence>
			))}
		</Series>
	</AbsoluteFill>
);

// Review frames: the last frame of every narration line, so each still shows
// everything that line added. bin/build.sh renders frames 0..N-1 of "Stills"
// as one image sequence. The composition is as long as the video because
// Remotion clamps a frozen frame to the composition's length.
export const STILL_FRAMES: {id: string; frame: number}[] = (() => {
	let offset = 0;
	return SCENES.flatMap(([key], i) => {
		const frames = T[key].lines.map((l) => ({id: l.id, frame: offset + l.to - 2}));
		offset += DURS[i];
		return frames;
	});
})();

const Stills: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Freeze frame={STILL_FRAMES[Math.min(frame, STILL_FRAMES.length - 1)].frame}>
			<Video />
		</Freeze>
	);
};

// The last frame of every scene, where everything the scene draws is on screen.
const FINAL_FRAMES: {id: string; frame: number}[] = (() => {
	let offset = 0;
	return SCENES.flatMap(([key], i) => {
		const lines = T[key].lines;
		const frame = offset + lines[lines.length - 1].to - 2;
		// The review also shows its six statements before the closing card.
		const extra = key === 'review' && lines.length > 1 ? [{id: 'review-items', frame: offset + lines[lines.length - 2].to - 2}] : [];
		offset += DURS[i];
		return [...extra, {id: key, frame}];
	});
})();

// Review sheets: four review stills per frame in a 2×2 grid (bin/sheets.sh);
// "Finals" shows only the last frame of each scene.
const Sheet: React.FC<{finals?: boolean}> = ({finals}) => {
	const frame = useCurrentFrame();
	const list = finals ? FINAL_FRAMES : STILL_FRAMES;
	return (
		<AbsoluteFill style={{backgroundColor: '#888', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6}}>
			{[0, 1, 2, 3].map((k) => {
				const s = list[frame * 4 + k];
				return (
					<div key={k} style={{position: 'relative', overflow: 'hidden', background: '#fff'}}>
						{s && (
							<div style={{position: 'absolute', width: 1920, height: 1080, transform: 'scale(0.4984)', transformOrigin: '0 0'}}>
								<Freeze frame={s.frame}>
									<Video />
								</Freeze>
							</div>
						)}
					</div>
				);
			})}
		</AbsoluteFill>
	);
};

export const RemotionRoot: React.FC = () => (
	<>
		<Composition id="Video" component={Video} durationInFrames={TOTAL} fps={30} width={1920} height={1080} />
		<Composition id="Sheet" component={Sheet} durationInFrames={TOTAL} fps={30} width={1920} height={1080} />
		<Composition id="Finals" component={Sheet} durationInFrames={TOTAL} fps={30} width={1920} height={1080} defaultProps={{finals: true}} />
		<Composition id="Stills" component={Stills} durationInFrames={TOTAL} fps={30} width={1920} height={1080} />
		<Still id="Cover16x9" component={Cover} width={1920} height={1080} defaultProps={{w: 1920, h: 1080}} />
		<Still id="Cover4x3" component={Cover} width={1440} height={1080} defaultProps={{w: 1440, h: 1080}} />
		<Still id="Cover3x4" component={Cover} width={1080} height={1440} defaultProps={{w: 1080, h: 1440}} />
	</>
);
