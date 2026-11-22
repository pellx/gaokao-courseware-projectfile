import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import type {SceneTimeline} from '../timeline';
import {C} from '../theme';

// One principle per scene: definition lines on the left, an illustration on
// the right, keyword callout underneath.
export const Principle: React.FC<{
	t: SceneTimeline;
	tag: string;
	title: string;
	color: string;
	lines: [React.ReactNode, number][];
	art: React.ReactNode;
	keywords: React.ReactNode;
	kwAt: number;
}> = ({t, tag, title, color, lines, art, keywords, kwAt}) => (
	<Scene duration={t.duration}>
		<Header tag={tag}>{title}</Header>
		<div style={{position: 'absolute', left: 90, width: 900, top: 185, display: 'flex', flexDirection: 'column', gap: 22}}>
			{lines.map(([body, at], i) => (
				<Appear key={i} at={at} dx={-16} dy={0}>
					<div style={{borderLeft: `8px solid ${color}`, paddingLeft: 20, fontSize: 31, fontWeight: 700, lineHeight: 1.55}}>{body}</div>
				</Appear>
			))}
		</div>
		<div style={{position: 'absolute', left: 1060, right: 80, top: 185}}>{art}</div>
		<Appear at={kwAt} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="关键词" color={color} soft={color === C.green ? C.greenSoft : color === C.red ? C.redSoft : C.orangeSoft} style={{fontSize: 31}}>
				{keywords}
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

export {Hl};
