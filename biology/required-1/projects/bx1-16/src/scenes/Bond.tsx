import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {Atp} from './atp';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.bond;
const {bd1, bd2, bd3, bd4} = t.cue;

export const Bond: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">特殊的化学键</Header>
		<svg width={860} height={390} viewBox="0 0 860 390" style={{position: 'absolute', left: 90, top: 200}}>
			<G at={bd1.from}>
				<Atp y={120} />
				<text x={570} y={200} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">2 个特殊的化学键</text>
			</G>
			<G at={bd3.from}>
				<Atp y={290} broken />
				<text x={660} y={370} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">断裂，释放能量</text>
			</G>
		</svg>
		<Bullets
			style={{left: 1000, right: 90, top: 210}}
			fontSize={32}
			gap={24}
			items={[
				{at: bd2.from, color: C.orange, children: <>磷酸基团带负电、相互排斥 → 化学键<Hl c={C.orange}>不稳定</Hl></>},
				{at: bd2.from + 50, color: C.orange, children: <>末端磷酸基团有较高的<Hl c={C.orange}>转移势能</Hl></>},
				{at: bd3.from, color: C.red, children: <>水解时<Hl>远离 A</Hl> 的特殊化学键易断裂</>},
			]}
		/>
		<Tip at={bd4.from} top={670} label="易错">
			1 个 ATP：<Hl>2 个特殊化学键</Hl>、3 个磷酸基团；水解一般只断<Hl>末端</Hl>那个
		</Tip>
		<Narration t={t} />
	</Scene>
);
