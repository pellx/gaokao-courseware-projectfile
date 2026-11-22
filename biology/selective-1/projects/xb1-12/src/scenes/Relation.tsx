import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.relation;
const {rl1, rl2, rl3} = t.cue;

export const Relation: React.FC = () => {
	const top = useRamp(rl1.from + 20, 16);
	const bottom = useRamp(rl2.from, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点三">两种调节的联系</Header>
			<Appear at={rl1.from} style={{position: 'absolute', left: 90, top: 170}}>
				<svg width={1740} height={480} viewBox="0 0 1740 480">
					<Defs />
					<rect x={80} y={180} width={420} height={120} rx={24} fill={C.orangeSoft} stroke={C.orange} strokeWidth={6} />
					<text x={290} y={255} fontSize={44} fontWeight={900} fill={C.orange} textAnchor="middle">神经系统</text>
					<rect x={1240} y={180} width={420} height={120} rx={24} fill={C.greenSoft} stroke={C.green} strokeWidth={6} />
					<text x={1450} y={255} fontSize={44} fontWeight={900} fill={C.green} textAnchor="middle">内分泌系统</text>
					<g opacity={top}>
						<path d="M500,200 C800,60 940,60 1230,200" fill="none" stroke={C.orange} strokeWidth={8} markerEnd="url(#arrow-orange)" />
						<text x={870} y={70} fontSize={32} fontWeight={900} fill={C.orange} textAnchor="middle">直接或间接调节内分泌腺</text>
						<text x={870} y={115} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="middle">体液调节可看作神经调节的一个环节</text>
					</g>
					<g opacity={bottom}>
						<path d="M1240,280 C940,420 800,420 508,280" fill="none" stroke={C.green} strokeWidth={8} markerEnd="url(#arrow-green)" />
						<text x={870} y={410} fontSize={32} fontWeight={900} fill={C.green} textAnchor="middle">激素影响神经系统的发育和功能</text>
						<text x={870} y={455} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="middle">如：甲状腺激素影响脑的发育、神经系统的兴奋性</text>
					</g>
				</svg>
			</Appear>
			<Appear at={rl3.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
				<Callout label="考法" style={{fontSize: 30}}>
					动物的生命活动，通常是<Hl>神经调节和体液调节共同作用</Hl>的结果
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
