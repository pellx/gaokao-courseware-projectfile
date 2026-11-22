import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cc1, cc2, cc3} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">物质循环的概念</Header>
		<svg width={900} height={400} viewBox="0 0 900 400" style={{position: 'absolute', left: 90, top: 180}}>
			<Defs />
			<G at={cc1.from}>
				<Box x={150} y={200} w={270} h={110} label="非生物环境" color={C.orange} fill={C.orangeSoft} fontSize={38} />
				<Box x={750} y={200} w={270} h={110} label="生物群落" color={C.green} fill={C.greenSoft} fontSize={38} />
				<path d="M180,135 C320,20 580,20 720,135" fill="none" stroke={C.green} strokeWidth={7} markerEnd="url(#arrow-green)" />
				<path d="M720,265 C580,380 320,380 180,265" fill="none" stroke={C.orange} strokeWidth={7} markerEnd="url(#arrow-orange)" />
				<text x={450} y={200} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">C、H、O、N、P、S</text>
				<text x={450} y={244} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">循环往复</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 1050, right: 90, top: 220, display: 'flex', flexDirection: 'column', gap: 26}}>
			<Appear at={cc2.from}>
				<div style={{border: `5px solid ${C.red}`, borderRadius: 20, padding: '16px 24px', fontSize: 31, fontWeight: 800}}>
					“物质” = <Hl>化学元素</Hl>
				</div>
			</Appear>
			<Appear at={cc2.from + 30}>
				<div style={{border: `5px solid ${C.orange}`, borderRadius: 20, padding: '16px 24px', fontSize: 31, fontWeight: 800}}>
					“生态系统” = <Hl c={C.orange}>生物圈</Hl>
				</div>
			</Appear>
		</div>
		<Appear at={cc3.from} style={{position: 'absolute', left: 90, right: 90, top: 630}}>
			<Callout label="考法" style={{fontSize: 30}}>
				特点：<Hl c={C.green}>全球性、循环往复</Hl>；农田等小生态系统要不断施肥，不能在自身内部完成物质循环
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
