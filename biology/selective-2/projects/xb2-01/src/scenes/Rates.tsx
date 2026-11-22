import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.rates;
const {rt1, rt2, rt3, rt4, rt5} = t.cue;

const D = {x: 870, y: 220};

export const Rates: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">出生率、死亡率、迁入率、迁出率</Header>
		<svg width={1740} height={440} viewBox="0 0 1740 440" style={{position: 'absolute', left: 90, top: 175}}>
			<Defs />
			<G at={rt1.from}>
				<Box x={D.x} y={D.y} w={300} h={110} label="种群密度" color={C.red} fill={C.redSoft} fontSize={42} />
			</G>
			<G at={rt2.from}>
				<Box x={260} y={90} w={260} label="出生率" color={C.green} fontSize={36} />
				<Arrow x1={390} y1={110} x2={720} y2={190} color={C.green} marker="arrow-green" />
				<text x={540} y={120} fontSize={40} fontWeight={900} fill={C.green}>＋</text>
				<Box x={1480} y={90} w={260} label="死亡率" color={C.red} fontSize={36} />
				<Arrow x1={1020} y1={190} x2={1350} y2={110} color={C.red} marker="arrow-red" />
				<text x={1170} y={120} fontSize={40} fontWeight={900} fill={C.red}>－</text>
			</G>
			<G at={rt3.from}>
				<Box x={260} y={350} w={260} label="迁入率" color={C.green} fontSize={36} />
				<Arrow x1={390} y1={330} x2={720} y2={250} color={C.green} marker="arrow-green" />
				<text x={540} y={340} fontSize={40} fontWeight={900} fill={C.green}>＋</text>
				<Box x={1480} y={350} w={260} label="迁出率" color={C.red} fontSize={36} />
				<Arrow x1={1020} y1={250} x2={1350} y2={330} color={C.red} marker="arrow-red" />
				<text x={1170} y={340} fontSize={40} fontWeight={900} fill={C.red}>－</text>
			</G>
		</svg>
		<Appear at={rt4.from} style={{position: 'absolute', left: 90, right: 90, top: 620, textAlign: 'center', fontSize: 36, fontWeight: 800}}>
			<Hl c={C.green}>出生率 + 迁入率</Hl> ＞ <Hl>死亡率 + 迁出率</Hl> → 种群密度<Hl c={C.green}>增大</Hl>
		</Appear>
		<Appear at={rt5.from} style={{position: 'absolute', left: 90, right: 90, top: 710}}>
			<Callout label="考法" style={{fontSize: 31}}>
				春运期间大城市人口变化，主要取决于<Hl>迁入率和迁出率</Hl>；它们和出生率、死亡率一起<Hl c={C.orange}>直接决定</Hl>种群密度
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
