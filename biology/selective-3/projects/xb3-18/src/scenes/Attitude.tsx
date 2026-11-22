import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.attitude;
const {at1, at2, at3, at4, at5} = t.cue;

const FOUR = ['不赞成', '不允许', '不支持', '不接受'];

export const Attitude: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">我国对克隆人的态度</Header>
		<Def at={at1.from} fontSize={34} color={C.red} soft={C.redSoft} style={{left: 90, right: 90, top: 170}}>
			禁止<Hl>生殖性克隆人</Hl>；<Hl c={C.green}>不反对治疗性克隆</Hl>（有效监控、严格审查）
		</Def>
		<Cards
			top={300}
			height={120}
			titleSize={44}
			items={FOUR.map((s, i) => ({title: <div style={{textAlign: 'center'}}>{s}</div>, color: C.red, body: null, at: at2.from + i * 10}))}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 460}}
			fontSize={31}
			gap={18}
			items={[
				{at: at3.from, color: C.green, children: <>治疗性克隆：在有效监控和严格审查下<Hl c={C.green}>不反对</Hl></>},
				{at: at4.from, color: C.orange, children: <>反对克隆人的理由：<Hl c={C.orange}>违反人类伦理道德</Hl>；技术不成熟，可能孕育出<Hl c={C.orange}>有严重生理缺陷</Hl>的孩子</>},
			]}
		/>
		<Tip at={at5.from} top={700} label="易错">
			我国禁止的是<Hl>生殖性克隆</Hl>，不是所有克隆；对治疗性克隆<Hl c={C.green}>不反对</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
