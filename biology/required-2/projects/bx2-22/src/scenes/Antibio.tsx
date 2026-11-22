import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.antibio;
const {ab1, ab2, ab3, ab4} = t.cue;
const GEN = [{r: 120, label: '第一代'}, {r: 85, label: '第二代'}, {r: 55, label: '第三代'}];

export const Antibio: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">探究抗生素对细菌的选择作用</Header>
		<svg width={1000} height={380} viewBox="0 0 1000 380" style={{position: 'absolute', left: 90, top: 170}}>
			{GEN.map((g, i) => {
				const cx = 160 + i * 330;
				return (
					<G key={i} at={i === 0 ? ab1.from : ab3.from + i * 30}>
						<circle cx={cx} cy={180} r={150} fill={C.orangeSoft} stroke={C.brown} strokeWidth={4} />
						<circle cx={cx} cy={180} r={g.r} fill="#fff" stroke={C.red} strokeWidth={3} strokeDasharray="8 6" />
						<circle cx={cx} cy={180} r={22} fill={C.red} />
						<text x={cx} y={365} fontSize={28} fontWeight={900} fill={C.text} textAnchor="middle">{g.label}</text>
					</G>
				);
			})}
		</svg>
		<Rows
			style={{left: 1130, right: 90, top: 180}}
			fontSize={29}
			gap={16}
			items={[
				{at: ab1.from, color: C.orange, title: '操作', children: <>放含抗生素的纸片 → 出现<Hl c={C.orange}>抑菌圈</Hl></>},
				{at: ab2.from, color: C.red, title: '挑菌', children: <>从<Hl>抑菌圈边缘</Hl>挑取菌落，重复培养</>},
				{at: ab3.from, color: C.red, title: '结果', children: <>抑菌圈直径<Hl>逐代变小</Hl> → 耐药性增强</>},
			]}
		/>
		<Tip at={ab4.from} top={620} label="易错" fontSize={33}>
			耐药变异在用抗生素<Hl>之前就存在</Hl>，抗生素只起<Hl>选择作用</Hl>；边缘的细菌可能耐药，所以从边缘挑菌
		</Tip>
		<Narration t={t} />
	</Scene>
);
