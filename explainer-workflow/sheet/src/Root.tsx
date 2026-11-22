import React from 'react';
import {AbsoluteFill, Composition, Img, staticFile} from 'remotion';

// 拼图：把 public/c/ 里的候选图排成网格，左上角写编号，用来一次看很多张。
type P = {imgs: {src: string; label: string}[]; cols: number};
const Sheet: React.FC<P> = ({imgs, cols}) => {
	const rows = Math.ceil(imgs.length / cols);
	const w = 1920 / cols, h = 1080 / rows;
	return (
		<AbsoluteFill style={{background: '#fff'}}>
			{imgs.map((it, i) => (
				<div key={i} style={{position: 'absolute', left: (i % cols) * w, top: Math.floor(i / cols) * h, width: w, height: h, border: '1px solid #ccc', boxSizing: 'border-box'}}>
					<Img src={staticFile(it.src)} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
					<div style={{position: 'absolute', left: 0, top: 0, background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: 22, padding: '2px 8px', fontFamily: 'sans-serif'}}>{it.label}</div>
				</div>
			))}
		</AbsoluteFill>
	);
};
export const Root: React.FC = () => <Composition id="Sheet" component={Sheet as any} durationInFrames={1} fps={30} width={1920} height={1080} defaultProps={{imgs: [], cols: 4}} />;
