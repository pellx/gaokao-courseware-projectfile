import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {Strand} from './strand';

const t = T.guess;
const {gu1, gu2, gu3} = t.cue;

export const Guess: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">对 DNA 复制方式的推测</Header>
		<svg width={1740} height={460} viewBox="0 0 1740 460" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={gu1.from}>
				<text x={420} y={40} fontSize={36} fontWeight={900} fill={C.red} textAnchor="middle">半保留复制</text>
				<Strand x={380} y={80} old />
				<Strand x={440} y={80} old />
				<text x={410} y={290} fontSize={40} fontWeight={900} fill={C.muted} textAnchor="middle">↓</text>
				<Strand x={250} y={310} old />
				<Strand x={300} y={310} />
				<Strand x={520} y={310} />
				<Strand x={570} y={310} old />
			</G>
			<G at={gu2.from}>
				<text x={1300} y={40} fontSize={36} fontWeight={900} fill={C.orange} textAnchor="middle">全保留复制</text>
				<Strand x={1260} y={80} old />
				<Strand x={1320} y={80} old />
				<text x={1290} y={290} fontSize={40} fontWeight={900} fill={C.muted} textAnchor="middle">↓</text>
				<Strand x={1130} y={310} old />
				<Strand x={1180} y={310} old />
				<Strand x={1400} y={310} />
				<Strand x={1450} y={310} />
			</G>
			<G at={gu1.from}>
				<rect x={700} y={360} width={30} height={24} fill={C.red} />
				<text x={742} y={381} fontSize={26} fontWeight={800} fill={C.text}>母链</text>
				<rect x={830} y={360} width={30} height={24} fill="#fff" stroke={C.orange} strokeWidth={4} />
				<text x={872} y={381} fontSize={26} fontWeight={800} fill={C.text}>新合成的子链</text>
			</G>
		</svg>
		<Tip at={gu3.from} top={680} label="考法" fontSize={34}>
			两种假说预测的实验结果<Hl>不同</Hl>，用实验结果就能判断真假（假说—演绎法）
		</Tip>
		<Narration t={t} />
	</Scene>
);
