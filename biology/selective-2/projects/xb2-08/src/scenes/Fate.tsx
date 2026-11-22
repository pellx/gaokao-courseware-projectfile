import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fate;
const {ft1, ft2, ft3, ft4, ft5} = t.cue;

export const Fate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">同化量的去向</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Tree
				width={1150}
				height={440}
				colWidth={400}
				boxWidth={340}
				fontSize={30}
				root={{
					label: '某营养级同化量',
					color: C.green,
					at: ft1.from,
					children: [
						{label: '呼吸作用散失', note: '热能', color: C.red, at: ft2.from},
						{
							label: '用于生长、发育和繁殖',
							color: C.green,
							at: ft2.from,
							children: [
								{label: '流入下一营养级', color: C.orange, at: ft3.from},
								{label: '流向分解者', color: C.brown, at: ft3.from + 15},
								{label: '未利用', color: C.muted, at: ft3.from + 30},
							],
						},
					],
				}}
			/>
		</div>
		<Appear at={ft4.from} style={{position: 'absolute', left: 1300, right: 70, top: 260, fontSize: 30, fontWeight: 800, lineHeight: 1.6}}>
			一定时间内，同化量的<Hl>四个去向</Hl>：
			<br />呼吸散失
			<br />流入下一营养级
			<br />流向分解者
			<br />未利用
		</Appear>
		<Appear at={ft5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				<Hl>最高营养级</Hl>没有“流入下一营养级”；“未利用”只在<Hl c={C.orange}>定时分析</Hl>时出现
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
