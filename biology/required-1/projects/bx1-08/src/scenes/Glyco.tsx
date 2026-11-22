import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {Membrane} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.glyco;
const {gl1, gl2, gl3} = t.cue;

export const Glyco: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">糖被（糖蛋白和糖脂）</Header>
		<svg width={1740} height={400} viewBox="0 0 1340 308" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={gl1.from}>
				<Membrane x={210} y={200} width={1130} proteins={[{x: 520, w: 110, kind: 'through'}, {x: 1000, w: 120, kind: 'embedTop'}]} glyco={[520, 760, 1000]} />
				<text x={520} y={40} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">糖蛋白</text>
				<text x={760} y={50} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">糖脂</text>
				<text x={1000} y={40} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">糖蛋白</text>
			</G>
			<G at={gl3.from}>
				<text x={0} y={110} fontSize={30} fontWeight={900} fill={C.red}>细胞外</text>
				<text x={0} y={146} fontSize={24} fontWeight={800} fill={C.red}>（有糖被）</text>
				<text x={0} y={290} fontSize={30} fontWeight={900} fill={C.muted}>细胞内</text>
			</G>
		</svg>
		<Bullets
			style={{left: 90, width: 820, top: 570}}
			fontSize={31}
			gap={16}
			items={[
				{at: gl1.from, color: C.red, children: <>糖类 ＋ 蛋白质 → <Hl>糖蛋白</Hl>；糖类 ＋ 脂质 → <Hl>糖脂</Hl></>},
			]}
		/>
		<Bullets
			style={{left: 960, right: 90, top: 570}}
			fontSize={31}
			gap={16}
			items={[{at: gl2.from, color: C.orange, children: <>与细胞表面的<Hl c={C.orange}>识别</Hl>、信息传递有关</>}]}
		/>
		<Tip at={gl3.from} top={660} label="解题方法">
			糖被只在膜<Hl>外侧</Hl>：有糖被的一侧是细胞外，用来<Hl>判断膜的内外侧</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
