import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {MitosisCell} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4} = t.cue;

const lbl = (x: number, y: number, s: string, c: string) => (
	<text x={x} y={y} fontSize={28} fontWeight={900} fill={c} textAnchor="middle">
		{s}
	</text>
);

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">动植物细胞有丝分裂的区别（前期和末期）</Header>
		<Appear at={cm1.from} dy={0} style={{position: 'absolute', left: 90, top: 160, fontSize: 30, fontWeight: 900}}>
			<span style={{color: C.brown, marginLeft: 300}}>高等植物细胞</span>
			<span style={{color: C.orange, marginLeft: 560}}>动物细胞</span>
		</Appear>
		<svg width={1740} height={545} viewBox="0 0 1740 545" style={{position: 'absolute', left: 90, top: 200}}>
			<G at={cm2.from}>
				{lbl(60, 125, '前期', C.red)}
				<MitosisCell cx={420} cy={120} stage="pro" w={300} h={210} />
				{lbl(420, 255, '两极发出纺锤丝', C.brown)}
				<MitosisCell cx={1150} cy={120} stage="pro" w={300} h={210} animal />
				{lbl(1150, 255, '中心体发出星射线', C.orange)}
			</G>
			<G at={cm3.from}>
				{lbl(60, 395, '末期', C.red)}
				<MitosisCell cx={420} cy={395} stage="telo" w={300} h={190} />
				{lbl(420, 528, '细胞板 → 细胞壁', C.brown)}
				<MitosisCell cx={1150} cy={395} stage="telo" w={300} h={190} animal />
				{lbl(1150, 528, '细胞膜向内凹陷、缢裂', C.orange)}
			</G>
		</svg>
		<Tip at={cm4.from} top={765} label="易错" fontSize={29}>
			<Hl>低等植物细胞也有中心体</Hl>；判断动植物细胞，看<Hl c={C.orange}>有无细胞壁</Hl>和末期分裂方式
		</Tip>
		<Narration t={t} />
	</Scene>
);
