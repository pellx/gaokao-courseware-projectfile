import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {Chloro} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chloroplast;
const {cl1, cl2, cl3, cl4} = t.cue;

export const Chloroplast: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">叶绿体的结构适于进行光合作用</Header>
		<svg width={800} height={420} viewBox="0 0 800 420" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={cl1.from}>
				<Chloro cx={380} cy={200} rx={300} ry={150} />
				<text x={380} y={400} fontSize={28} fontWeight={800} fill={C.green} textAnchor="middle">基粒：类囊体堆叠而成</text>
			</G>
			<G at={cl2.from}>
				<text x={470} y={40} fontSize={26} fontWeight={800} fill={C.red}>色素在类囊体薄膜上</text>
				<line x1={600} y1={50} x2={560} y2={180} stroke={C.red} strokeWidth={3} />
			</G>
		</svg>
		<Bullets
			style={{left: 960, right: 90, top: 210}}
			fontSize={32}
			gap={24}
			items={[
				{at: cl1.from, color: C.green, children: <>双层膜；基粒由<Hl c={C.green}>类囊体</Hl>堆叠而成</>},
				{at: cl2.from, color: C.red, children: <>四种色素都在<Hl>类囊体薄膜</Hl>上</>},
				{at: cl3.from, color: C.orange, children: <>类囊体薄膜上和<Hl c={C.orange}>基质</Hl>中有许多与光合作用有关的酶</>},
			]}
		/>
		<Tip at={cl4.from} top={680} label="解题方法">
			基粒、类囊体<Hl>极大地扩展了受光面积</Hl>：结构与功能相适应
		</Tip>
		<Narration t={t} />
	</Scene>
);
