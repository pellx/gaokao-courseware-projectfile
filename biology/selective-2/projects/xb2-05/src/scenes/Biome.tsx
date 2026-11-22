import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import type {SceneTimeline} from '../timeline';
import {C} from '../theme';

// One scene per community type: up to three cards (environment, plants,
// animals …) side by side and a callout underneath.
export type BiomeCard = [string, string, React.ReactNode, number];

export const Biome: React.FC<{
	t: SceneTimeline;
	tag: string;
	title: string;
	cards: BiomeCard[];
	callout: {label: string; at: number; red?: boolean; body: React.ReactNode};
}> = ({t, tag, title, cards, callout}) => (
	<Scene duration={t.duration}>
		<Header tag={tag}>{title}</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185, display: 'flex', gap: 26}}>
			{cards.map(([head, color, body, at]) => (
				<Appear key={head} at={at} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 320, boxSizing: 'border-box', padding: '24px 28px'}}>
						<div style={{fontSize: 40, fontWeight: 900, color}}>{head}</div>
						<div style={{fontSize: 31, fontWeight: 700, marginTop: 16, lineHeight: 1.6}}>{body}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={callout.at} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label={callout.label} color={callout.red ? C.red : C.green} soft={callout.red ? C.redSoft : C.greenSoft} style={{fontSize: 30}}>
				{callout.body}
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

export {Hl};
