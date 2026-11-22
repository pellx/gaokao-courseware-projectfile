import React from 'react';
import {Appear} from './ui';
import {Coleoptile, ColeoptileProps} from './Coleoptile';
import {C} from '../theme';

export type Trial = {p: ColeoptileProps; at: number; result: string; color?: string; resultAt: number};

// A row of coleoptile set-ups, each with its result written underneath.
export const Trials: React.FC<{trials: Trial[]; scale?: number; gap?: number}> = ({trials, scale = 1, gap = 20}) => (
	<div style={{display: 'flex', gap}}>
		{trials.map((t, i) => (
			<div key={i} style={{width: 220 * scale, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Appear at={t.at}>
					<Coleoptile {...t.p} scale={scale} />
				</Appear>
				<Appear at={t.resultAt} dy={8}>
					<div style={{fontSize: 28 * Math.max(scale, 0.9), fontWeight: 900, color: t.color ?? C.green, textAlign: 'center', whiteSpace: 'nowrap'}}>{t.result}</div>
				</Appear>
			</div>
		))}
	</div>
);
