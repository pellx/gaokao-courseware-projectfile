import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {Membrane} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.model;
const {md1, md2, md3, md4, md5} = t.cue;

export const Model: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">流动镶嵌模型</Header>
		<svg width={1740} height={330} viewBox="0 0 1340 254" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={md2.from}>
				<Membrane x={210} y={130} width={1130} />
				<text x={0} y={92} fontSize={26} fontWeight={800} fill={C.orange}>亲水头部 →</text>
				<text x={0} y={140} fontSize={26} fontWeight={800} fill={C.brown}>疏水尾部 →</text>
			</G>
			<G at={md3.from}>
				<Membrane x={210} y={130} width={1130} proteins={[{x: 480, w: 120, kind: 'top', label: '镶'}, {x: 800, w: 110, kind: 'embedTop', label: '嵌入'}, {x: 1120, w: 110, kind: 'through', label: '贯穿'}]} />
			</G>
		</svg>
		<Bullets
			style={{left: 90, width: 820, top: 510}}
			fontSize={31}
			gap={18}
			items={[
				{at: md1.from, color: C.red, children: <>辛格和尼科尔森（1972）</>},
				{at: md2.from, color: C.orange, children: <><Hl>磷脂双分子层</Hl>是膜的基本支架</>},
			]}
		/>
		<Bullets
			style={{left: 960, right: 90, top: 510}}
			fontSize={31}
			gap={18}
			items={[
				{at: md3.from, color: C.green, children: <>蛋白质：<Hl c={C.green}>镶、嵌入、贯穿</Hl></>},
				{at: md4.from, color: C.orange, children: <>磷脂可<Hl c={C.orange}>侧向自由移动</Hl>，大多数蛋白质也能运动</>},
			]}
		/>
		<Tip at={md5.from} top={660} label="易错">
			<Hl>大多数</Hl>蛋白质能运动（不是全部）；功能越复杂的膜，<Hl>蛋白质的种类和数量越多</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
