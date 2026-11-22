import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.loss;
const {ls1, ls2, ls3, ls4, ls5} = t.cue;

// A forest split into patches by roads.
const Patch: React.FC<{x: number; y: number; w: number; h: number}> = ({x, y, w, h}) => (
	<rect x={x} y={y} width={w} height={h} rx={14} fill={C.green} opacity={0.75} />
);

export const Loss: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">生物多样性丧失的原因</Header>
		<svg width={560} height={380} viewBox="0 0 560 380" style={{position: 'absolute', left: 90, top: 180}}>
			<G at={ls2.from}>
				<rect x={0} y={0} width={560} height={330} rx={20} fill={C.panel} stroke={C.line} strokeWidth={4} />
				<Patch x={20} y={20} w={240} h={130} />
				<Patch x={300} y={20} w={240} h={130} />
				<Patch x={20} y={180} w={240} h={130} />
				<Patch x={300} y={180} w={240} h={130} />
				<rect x={0} y={155} width={560} height={20} fill={C.muted} />
				<rect x={270} y={0} width={20} height={330} fill={C.muted} />
				<text x={280} y={368} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">道路把森林分割成小块</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 720, right: 90, top: 185, display: 'flex', flexDirection: 'column', gap: 18}}>
			<Appear at={Math.max(ls1.from, ls2.from)}>
				<div style={{border: `5px solid ${C.red}`, borderRadius: 20, padding: '14px 22px', fontSize: 31, fontWeight: 800}}>
					① <Hl>栖息地的丧失和碎片化</Hl>（最主要）
				</div>
			</Appear>
			<Appear at={ls3.from}>
				<div style={{border: `4px solid ${C.orange}`, borderRadius: 20, padding: '14px 22px', fontSize: 30, fontWeight: 700}}>
					② 掠夺式利用：<Hl c={C.orange}>乱捕滥杀、过度采伐</Hl>
				</div>
			</Appear>
			<Appear at={ls4.from}>
				<div style={{border: `4px solid ${C.orange}`, borderRadius: 20, padding: '14px 22px', fontSize: 30, fontWeight: 700}}>
					③ 环境污染；农林品种单一化
				</div>
			</Appear>
			<Appear at={ls4.from + 30}>
				<div style={{border: `4px solid ${C.orange}`, borderRadius: 20, padding: '14px 22px', fontSize: 30, fontWeight: 700}}>
					④ <Hl c={C.orange}>外来物种盲目引入</Hl>（水葫芦、福寿螺）
				</div>
			</Appear>
		</div>
		<Appear at={ls5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				外来物种入侵<Hl>不是</Hl>最主要原因；引入外来物种<Hl>不一定</Hl>增加当地生物多样性，往往使其降低
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
