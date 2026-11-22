import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.engelmann;
const {eg1, eg2, eg3, eg4, eg5} = t.cue;

// A Spirogyra cell with its spiral chloroplast; bacteria (dots) gather where light falls.
const Cell: React.FC<{x: number; title: string; spot?: number; all?: boolean}> = ({x, title, spot, all}) => {
	const W = 700;
	let d = `M${x + 20},140`;
	for (let i = 0; i < 4; i++) d += ` q${W / 16 - 3},-60 ${W / 8 - 5},0 t${W / 8 - 5},0`;
	const dots = Array.from({length: all ? 26 : 12}, (_, i) => {
		const px = all ? x + 30 + (i % 13) * 52 : (spot ?? 0) - 40 + (i % 4) * 26;
		const py = i % 2 ? 70 + (i % 3) * 8 : 210 - (i % 3) * 8;
		return <circle key={i} cx={px} cy={py} r={7} fill={C.brown} />;
	});
	return (
		<g>
			<text x={x + W / 2} y={30} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">{title}</text>
			{spot !== undefined && <rect x={spot - 30} y={40} width={60} height={200} fill="#fff3c4" />}
			{all && <rect x={x} y={40} width={W} height={200} fill="#fff8dc" />}
			<rect x={x} y={90} width={W} height={100} rx={40} fill="none" stroke={C.green} strokeWidth={4} />
			<path d={d} fill="none" stroke={C.green} strokeWidth={14} strokeLinecap="round" />
			{dots}
		</g>
	);
};

export const Engelmann: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">恩格尔曼的水绵实验</Header>
		<svg width={1740} height={280} viewBox="0 0 1740 280" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={eg1.from}>
				<Cell x={20} title="黑暗、无空气，极细光束照射" spot={380} />
			</G>
			<G at={eg2.from}>
				<Cell x={960} title="完全暴露在光下" all />
			</G>
		</svg>
		<Tip at={eg3.from} top={460} label="结论">
			<Hl>叶绿体能吸收光能用于光合作用放氧</Hl>；结合其他证据，得出叶绿体是<Hl>光合作用的场所</Hl>
		</Tip>
		<Tip at={eg4.from} top={580} label="三棱镜分光">
			细菌主要聚集在<Hl>红光和蓝紫光</Hl>区域
		</Tip>
		<Tip at={eg5.from} top={700} label="解题方法">
			水绵叶绿体<Hl c={C.orange}>螺旋带状</Hl>便于观察；黑暗、无空气是为了<Hl>排除光和氧气的干扰</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
