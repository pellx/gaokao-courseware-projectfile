import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.function;
const {fc1, fc2, fc3, fc4} = t.cue;

const BASES = 'ATGCCGTAAGCTTAGC';
const COL: Record<string, string> = {A: C.red, T: C.orange, G: C.green, C: C.brown};

const Strand: React.FC<{seq: string}> = ({seq}) => (
	<div style={{display: 'flex', gap: 8}}>
		{seq.split('').map((b, i) => (
			<div key={i} style={{width: 76, height: 76, borderRadius: 14, background: COL[b], color: '#fff', fontSize: 40, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				{b}
			</div>
		))}
	</div>
);

export const Func: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">核酸的功能</Header>
		<Def at={fc1.from} style={{left: 90, right: 90, top: 165}} fontSize={34} color={C.red} soft={C.redSoft}>
			核酸是细胞内<Hl>携带遗传信息的物质</Hl>，在遗传、变异和蛋白质的生物合成中有重要作用
		</Def>
		<Appear at={fc2.from} style={{position: 'absolute', left: 90, top: 340}}>
			<div style={{fontSize: 32, fontWeight: 800, marginBottom: 14}}>
				遗传信息 ＝ <Hl>脱氧核苷酸（碱基）的排列顺序</Hl>
			</div>
			<Strand seq={BASES} />
		</Appear>
		<Appear at={fc3.from} style={{position: 'absolute', left: 90, top: 520, fontSize: 32, fontWeight: 700}}>
			只有 4 种，但数量多、排列顺序千变万化 → 储存<Hl c={C.orange}>大量遗传信息</Hl>
		</Appear>
		<Tip at={fc4.from} top={640} label="考法">
			DNA 指纹用于刑侦、亲子鉴定：原理是<Hl>不同个体 DNA 的脱氧核苷酸序列不同</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
