import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.auxeth;
const {ae1, ae2, ae3, ae4} = t.cue;

// Two boxes joined by a loop: auxin up → more ethylene → auxin's action damped.
export const AuxEth: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">生长素与乙烯的相互作用</Header>
		<svg width={1200} height={460} viewBox="0 0 1200 460" style={{position: 'absolute', left: 360, top: 180}}>
			<Defs />
			<G at={ae1.from}>
				<rect x={40} y={170} width={300} height={110} rx={24} fill="#fff" stroke={C.orange} strokeWidth={6} />
				<text x={190} y={238} fontSize={40} fontWeight={900} fill={C.orange} textAnchor="middle">生长素</text>
				<rect x={800} y={170} width={300} height={110} rx={24} fill="#fff" stroke={C.brown} strokeWidth={6} />
				<text x={950} y={238} fontSize={40} fontWeight={900} fill={C.brown} textAnchor="middle">乙烯</text>
			</G>
			<G at={ae2.from}>
				<path d="M190,165 C 300,40 840,40 950,160" fill="none" stroke={C.green} strokeWidth={7} markerEnd="url(#arrow-green)" />
				<text x={570} y={60} fontSize={32} fontWeight={900} fill={C.green} textAnchor="middle">浓度升高到一定值 → 促进乙烯合成</text>
			</G>
			<G at={ae3.from}>
				<path d="M950,285 C 840,420 300,420 195,290" fill="none" stroke={C.red} strokeWidth={7} markerEnd="url(#arrow-red)" />
				<text x={570} y={420} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">乙烯含量升高 → 抑制生长素的作用</text>
			</G>
		</svg>
		<Appear at={ae4.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="考法" style={{fontSize: 30, padding: '12px 24px'}}>
				可解释<Hl>高浓度生长素抑制生长</Hl>；常结合两种激素含量变化曲线考查
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
