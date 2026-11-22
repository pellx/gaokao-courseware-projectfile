import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning1;
const {me1, me2, me3, me4} = t.cue;

export const Meaning1: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">实践意义：增大总能量，提高利用率</Header>
		<Appear at={me1.from} style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '18px 28px', fontSize: 31, fontWeight: 700, lineHeight: 1.55}}>
				<Hl c={C.green}>意义一</Hl>：时间、空间上合理配置，<Hl c={C.green}>增大流入的总能量</Hl>——间作套种、立体农业
			</div>
		</Appear>
		<Appear at={me2.from} style={{position: 'absolute', left: 90, right: 90, top: 300}}>
			<div style={{border: `5px solid ${C.orange}`, borderRadius: 22, padding: '18px 28px', fontSize: 31, fontWeight: 700, lineHeight: 1.55}}>
				<Hl c={C.orange}>意义二</Hl>：科学规划、设计人工生态系统，使能量得到<Hl c={C.orange}>最有效的利用</Hl>
			</div>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 430}}>
			<Chain
				fontSize={30}
				gap={12}
				steps={[
					{label: '秸秆', color: C.gold, at: me3.from},
					{label: '喂牲畜', color: C.orange, at: me3.from + 15},
					{label: '粪便入沼气池', color: C.brown, at: me3.from + 30},
					{label: '沼气作燃料', color: C.red, at: me3.from + 45},
					{label: '沼渣肥田', color: C.green, at: me3.from + 60},
				]}
			/>
		</div>
		<Appear at={me3.from + 70} style={{position: 'absolute', left: 90, top: 530, fontSize: 30, fontWeight: 800}}>
			能量<Hl c={C.orange}>多级利用</Hl> → 提高<Hl>能量利用率</Hl>
		</Appear>
		<Appear at={me4.from} style={{position: 'absolute', left: 90, right: 90, top: 610}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				提高的是<Hl>能量利用率</Hl>，不是<Hl>能量传递效率</Hl>；相邻营养级间的传递效率不变
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
