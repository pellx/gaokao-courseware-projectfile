import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.convert;
const {cv1, cv2, cv3, cv4} = t.cue;

const GL = {x: 420, y: 300};
const FAT = {x: 1320, y: 300};
const GN = {x: 420, y: 80};

export const Convert: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">糖类和脂质的相互转化</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={cv1.from}>
				<Box x={GL.x} y={GL.y} w={300} h={100} label="葡萄糖" sub="血糖" color={C.orange} fontSize={40} />
				<Box x={GN.x} y={GN.y} w={300} h={90} label="糖原" color={C.brown} fontSize={38} />
				<Arrow x1={GL.x} y1={GL.y - 50} x2={GN.x} y2={GN.y + 45} trim={[6, 6]} marker="arrow" />
				<text x={GL.x + 30} y={(GL.y + GN.y) / 2 + 10} fontSize={28} fontWeight={800} fill={C.muted}>多余时合成</text>
			</G>
			<G at={cv2.from}>
				<Box x={FAT.x} y={FAT.y} w={360} h={100} label="脂肪、某些氨基酸" color={C.red} fontSize={36} />
				<Arrow x1={GL.x + 150} y1={GL.y - 20} x2={FAT.x - 180} y2={FAT.y - 20} trim={[6, 6]} color={C.green} marker="arrow-green" width={14} />
				<text x={(GL.x + FAT.x) / 2} y={GL.y - 50} fontSize={34} fontWeight={900} fill={C.green} textAnchor="middle">可以大量转化</text>
			</G>
			<G at={cv3.from}>
				<Arrow x1={FAT.x - 180} y1={FAT.y + 30} x2={GL.x + 150} y2={GL.y + 30} trim={[6, 6]} color={C.red} marker="arrow-red" width={5} dash="12 10" />
				<text x={(GL.x + FAT.x) / 2} y={GL.y + 85} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">不能大量转化</text>
				<text x={(GL.x + FAT.x) / 2} y={GL.y + 130} fontSize={28} fontWeight={700} fill={C.muted} textAnchor="middle">脂肪一般只在糖类供能不足时才分解供能</text>
			</G>
		</svg>
		<Tip at={cv4.from} top={680} label="解题方法">
			转化<Hl>不对称</Hl>：糖类能大量变成脂肪（吃糖多也会发胖），脂肪不能大量变成糖类
		</Tip>
		<Narration t={t} />
	</Scene>
);
