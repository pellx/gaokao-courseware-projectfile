import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.edema;
const {ed2, ed3, ed4, ed5, ed6} = t.cue;
const mid = (from: number, to: number) => Math.round((from + to) / 2);

const down = <span style={{color: C.orange, fontWeight: 800}}>血浆渗透压↓</span>;
const up = <span style={{color: C.red, fontWeight: 800}}>组织液渗透压↑</span>;

export const Edema: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点十">组织水肿的成因</Header>
			<Appear at={ed2.from - 10} style={{position: 'absolute', left: 90, top: 170, width: 560, height: 560}}>
				<Photo src="images/edema.jpg" caption="凹陷性水肿：按压后留下凹痕" style={{width: '100%', height: '100%'}} />
			</Appear>
			<div style={{position: 'absolute', left: 700, right: 90, top: 170}}>
				<Appear at={ed2.from}>
					<div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 34, fontWeight: 800, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '18px 24px'}}>
						{down}
						<span>或</span>
						{up}
						<span style={{color: C.muted}}>→</span>
						<span>水分进入组织液 → 水肿</span>
					</div>
				</Appear>
				<div style={{marginTop: 24}}>
					<Table
						head={['原因', '变化', '结果']}
						cols="1fr 1.35fr 0.95fr"
						at={ed3.from - 10}
						fontSize={30}
						rowHeight={66}
						focus={frame >= ed6.from}
						rows={[
							{cells: ['营养不良', '血浆蛋白减少', down], at: ed3.from, key: true},
							{cells: ['肾小球肾炎', '蛋白质随尿液流失', down], at: mid(ed3.from, ed3.to), key: true},
							{cells: ['过敏反应', '毛细血管壁通透性增大', up], at: ed4.from, key: true},
							{cells: ['淋巴循环受阻', '组织液中蛋白质不能回流', up], at: mid(ed4.from, ed4.to), key: true},
							{cells: ['局部代谢旺盛', '代谢产物增多', up], at: ed5.from, key: true},
						]}
					/>
				</div>
				<Appear at={ed6.from} style={{marginTop: 22}}>
					<Callout label="解题方法" style={{fontSize: 32}}>
						先判断是<Hl c={C.orange}>血浆渗透压降低</Hl>还是<Hl>组织液渗透压升高</Hl>，再对号入座。
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};
