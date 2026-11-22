import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.grossnet;
const {gn1, gn2, gn3, gn4} = t.cue;

export const Grossnet: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">总光合速率与净光合速率</Header>
		<Def at={gn1.from} style={{left: 90, right: 90, top: 165}} fontSize={38} color={C.red} soft={C.redSoft}>
			<Hl>总光合速率 ＝ 净光合速率 ＋ 呼吸速率</Hl>
		</Def>
		<Appear at={gn2.from} style={{position: 'absolute', left: 90, right: 90, top: 290}}>
			<Table
				at={gn2.from}
				cols="260px 1fr 1fr 1fr"
				fontSize={31}
				rowHeight={76}
				head={['类型', 'O2', 'CO2', '有机物']}
				rows={[
					{at: gn2.from, cells: ['总光合', <Hl>产生、制造</Hl>, <Hl>固定</Hl>, <Hl>制造、生成</Hl>]},
					{at: gn2.from + 50, cells: ['净光合', <Hl c={C.green}>释放</Hl>, <Hl c={C.green}>吸收</Hl>, <Hl c={C.green}>积累</Hl>]},
					{at: gn3.from, cells: ['呼吸速率', '黑暗中吸收', '黑暗中释放', '黑暗中消耗']},
				]}
			/>
		</Appear>
		<Tip at={gn4.from} top={620} label="解题方法">
			先看关键词判断总还是净；植物能否生长，看<Hl>净光合速率是否大于 0</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
