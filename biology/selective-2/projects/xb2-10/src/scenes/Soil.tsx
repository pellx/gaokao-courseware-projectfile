import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.soil;
const {sl1, sl2, sl3, sl4, sl5} = t.cue;

const b = (s: string, c: string) => <span style={{color: c, fontWeight: 800}}>{s}</span>;

export const Soil: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">探究土壤微生物的分解作用</Header>
		<Appear at={sl1.from} style={{position: 'absolute', left: 90, top: 165, fontSize: 29, fontWeight: 800}}>
			案例一：落叶是在土壤微生物的作用下腐烂的吗？　<span style={{color: C.muted}}>自变量：<Hl c={C.orange}>土壤微生物的有无</Hl></span>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 225}}>
			<Table
				head={['组别', '土壤处理', '落叶']}
				cols="1fr 3fr 1.4fr"
				at={sl2.from}
				fontSize={28}
				rowHeight={70}
				rows={[
					{cells: [b('实验组', C.red), <span><Hl>60 ℃ 恒温箱处理 1 h</Hl>（排除微生物，尽量不改变理化性质）</span>, '腐烂慢'], at: sl2.from},
					{cells: [b('对照组', C.green), '不做处理（自然状态）', '腐烂快'], at: sl3.from},
				]}
			/>
		</div>
		<Appear at={sl4.from} style={{position: 'absolute', left: 90, top: 440, fontSize: 29, fontWeight: 800}}>
			案例二：土壤微生物对淀粉的分解
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 490}}>
			<Table
				head={['组别', '处理', '加碘液']}
				cols="1fr 3fr 1.4fr"
				at={sl4.from}
				fontSize={28}
				rowHeight={64}
				rows={[
					{cells: [b('A 组', C.red), '土壤浸出液 + 淀粉糊', <Hl c={C.green}>不变蓝</Hl>], at: sl4.from + 20},
					{cells: [b('B 组', C.green), '蒸馏水 + 淀粉糊', <Hl>变蓝</Hl>], at: sl4.from + 40},
				]}
			/>
		</div>
		<Appear at={sl5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29}}>
				被处理的是<Hl>实验组</Hl>，自然状态的是<Hl c={C.green}>对照组</Hl>；用 60 ℃ 而不高温灭菌，是为了不改变土壤理化性质
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
