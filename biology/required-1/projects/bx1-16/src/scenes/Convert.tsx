import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Box, G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.convert;
const {cv1, cv2, cv3, cv4} = t.cue;

export const Convert: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">ATP 与 ADP 的相互转化</Header>
		<svg width={1740} height={440} viewBox="0 0 1740 440" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={cv1.from}>
				<Box x={420} y={220} w={240} h={110} label="ATP" color={C.red} fontSize={52} />
				<Box x={1320} y={220} w={340} h={110} label="ADP ＋ Pi" color={C.orange} fontSize={48} />
				<path d="M560,180 C760,60 980,60 1140,180" fill="none" stroke={C.red} strokeWidth={8} markerEnd="url(#arrow-red)" />
				<text x={850} y={50} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">酶 1（水解酶）：释放能量，用于各项生命活动</text>
			</G>
			<G at={cv2.from}>
				<path d="M1140,260 C980,380 760,380 560,260" fill="none" stroke={C.green} strokeWidth={8} markerEnd="url(#arrow-green)" />
				<text x={850} y={420} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">酶 2（合成酶）：储存能量（来自细胞呼吸、光合作用）</text>
			</G>
			<G at={cv3.from}>
				<text x={850} y={232} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">时刻不停，动态平衡</text>
			</G>
		</svg>
		<Tip at={cv4.from} top={650} label="易错">
			<Hl>不是可逆反应</Hl>：两个方向的<Hl c={C.orange}>酶不同、能量来源和去路不同</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
