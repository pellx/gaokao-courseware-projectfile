import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4} = t.cue;

const k = (s: string, c: string) => <span style={{color: c, fontWeight: 900}}>{s}</span>;

export const Judge: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">价值类型的判断</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				head={['实例', '价值类型']}
				cols="3fr 1fr"
				at={jd1.from}
				fontSize={28}
				rowHeight={66}
				rows={[
					{cells: ['芦苇造纸；青蒿素治疗疟疾', k('直接价值', C.orange)], at: jd2.from},
					{cells: ['到湿地旅游观赏；创作诗歌', k('直接价值', C.orange)], at: jd2.from + 25},
					{cells: ['模仿蝙蝠回声定位发明雷达（科学研究）', k('直接价值', C.orange)], at: jd2.from + 50},
					{cells: ['湿地蓄洪防旱；森林保持水土', k('间接价值', C.green)], at: jd3.from},
					{cells: ['植物光合作用制造氧气、调节气候', k('间接价值', C.green)], at: jd3.from + 25},
				]}
			/>
		</div>
		<Appear at={jd4.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				问一句“<Hl>是否对生态系统起调节作用</Hl>”：是 → <Hl c={C.green}>间接</Hl>；对人类有直接用途（含科研、观赏、艺术）→ <Hl c={C.orange}>直接</Hl>；未知 → 潜在
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
