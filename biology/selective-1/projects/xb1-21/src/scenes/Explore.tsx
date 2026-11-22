import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.explore;
const {ex2, ex3, ex4, ex5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Explore: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">探究：插条生根的最适浓度</Header>
		<div style={{position: 'absolute', left: 90, top: 185}}>
			<Chain
				fontSize={30}
				gap={10}
				arrows={['', '缩小梯度']}
				steps={[
					{label: '预实验：大范围浓度梯度', color: C.orange, at: ex2.from},
					{label: '确定大致范围', color: C.orange, at: at(ex2.from, ex2.to, 0.4)},
					{label: '正式实验：找最适浓度', color: C.red, at: at(ex2.from, ex2.to, 0.7)},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 300, display: 'flex', gap: 24}}>
			{[
				['浸泡法', '浓度较低，时间较长', '最好在遮阴、空气湿度较高处'],
				['沾蘸法', '浓度较高，时间较短', '约5秒'],
			].map(([name, a, b], i) => (
				<Appear key={name} at={at(ex3.from, ex3.to, i * 0.5)} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.green}`, borderRadius: 20, padding: '16px 24px', background: '#fff'}}>
						<div style={{fontSize: 36, fontWeight: 900, color: C.green}}>{name}</div>
						<div style={{fontSize: 30, fontWeight: 800, marginTop: 8}}>{a}</div>
						<div style={{fontSize: 26, fontWeight: 700, color: C.muted, marginTop: 4}}>{b}</div>
					</div>
				</Appear>
			))}
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 510, display: 'flex', gap: 18, fontSize: 28, fontWeight: 800}}>
			<Appear at={ex4.from}>自变量：<Hl>调节剂浓度</Hl></Appear>
			<Appear at={at(ex4.from, ex4.to, 0.3)}>因变量：<Hl>生根数目或长度</Hl></Appear>
			<Appear at={at(ex4.from, ex4.to, 0.6)}>无关变量：<Hl c={C.orange}>插条长短、芽数、处理时间</Hl></Appear>
		</div>
		<Appear at={ex5.from} style={{position: 'absolute', left: 90, right: 90, top: 610}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				预实验<Hl>要设蒸馏水空白对照</Hl>；正式实验在确定范围内缩小梯度，各组<Hl c={C.orange}>相互对照</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
