import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Formula} from '../components/gene';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.selfing;
const {sf1, sf2, sf3, sf4} = t.cue;
// x = n / 6 (generations 0–6)
const het = (x: number) => Math.pow(0.5, 6 * x);

export const Selfing: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">杂合子连续自交</Header>
		<div style={{position: 'absolute', left: 80, top: 160}}>
			<Plot
				id="selfing"
				w={900}
				h={540}
				at={sf1.from}
				xLabel="代数 n"
				yLabel="所占比例"
				xTicks={[1, 2, 3, 4, 5].map((n) => [n / 6, String(n)] as [number, string])}
				yTicks={[[1, '1'], [0.5, '1/2']]}
				curves={[
					{pts: sample(het), color: C.green, at: sf1.from, dur: 50, label: '杂合子', lx: 0.25, ly: 0.12},
					{pts: sample((x) => 1 - het(x)), color: C.red, at: sf2.from, dur: 50, label: '纯合子', lx: 0.85, ly: 1.07},
					{pts: sample((x) => (1 - het(x)) / 2), color: C.orange, at: sf3.from, dur: 50, label: '显性纯合子', lx: 0.85, ly: 0.6},
				]}
				hrefs={[{y: 0.5, label: '', color: C.muted, at: sf3.from}]}
			/>
		</div>
		<Formula at={sf1.from + 20} style={{left: 1080, top: 200}} color={C.green} fontSize={40}>
			杂合子 = (1/2)<sup>n</sup>
		</Formula>
		<Formula at={sf2.from} style={{left: 1080, top: 330}} color={C.red} fontSize={40}>
			纯合子 = 1 − (1/2)<sup>n</sup>
		</Formula>
		<Formula at={sf3.from} style={{left: 1080, top: 460}} color={C.orange} fontSize={36}>
			显性纯合子 = [1 − (1/2)<sup>n</sup>] / 2
		</Formula>
		<Tip at={sf4.from} top={730} label="考法" fontSize={32}>
			杂交育种靠<Hl>连续自交</Hl>提高纯合度；若每代<Hl>淘汰隐性个体</Hl>，F<sub>n</sub> 中显性纯合子占 (2<sup>n</sup>−1)/(2<sup>n</sup>+1)
		</Tip>
		<Narration t={t} />
	</Scene>
);
