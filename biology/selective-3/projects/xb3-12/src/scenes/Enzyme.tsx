import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Duplex} from '../components/dna';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.enzyme;
const {en1, en2, en3, en4, en5} = t.cue;

export const Enzyme: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">限制性内切核酸酶（限制酶）</Header>
		<Bullets
			style={{left: 90, right: 90, top: 170}}
			fontSize={31}
			gap={16}
			items={[
				{at: en1.from, children: <>来源：主要从<Hl c={C.orange}>原核生物</Hl>中分离纯化</>},
				{at: en2.from, color: C.red, children: <>作用：识别双链 DNA 的<Hl>特定核苷酸序列</Hl>，断开每条链特定部位的<Hl>磷酸二酯键</Hl></>},
				{at: en3.from, children: <>识别序列：大多数由 <Hl c={C.orange}>6 个核苷酸</Hl>组成，也有 4 个、8 个等</>},
			]}
		/>
		<svg width={1740} height={330} viewBox="0 0 1740 330" style={{position: 'absolute', left: 90, top: 380}}>
			<G at={en4.from}>
				<text x={0} y={30} fontSize={30} fontWeight={900} fill={C.red}>例：EcoRI</text>
				<text x={0} y={70} fontSize={26} fontWeight={800} fill={C.muted}>识别 GAATTC，在 G 与 A 之间切开</text>
				<Duplex x={560} y={10} top="ATGAATTCGC" bottom="TACTTAAGCG" cutTop={3} cutBottom={7} hl={[2, 8]} />
				<text x={560 - 30} y={50} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">5′</text>
				<text x={560 - 30} y={118} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="end">3′</text>
				<text x={560 + 10 * 46 + 30} y={50} fontSize={24} fontWeight={800} fill={C.muted}>3′</text>
				<text x={560 + 10 * 46 + 30} y={118} fontSize={24} fontWeight={800} fill={C.muted}>5′</text>
				<text x={560 + 5 * 46} y={190} fontSize={26} fontWeight={900} fill={C.orange} textAnchor="middle">识别序列（回文）</text>
			</G>
		</svg>
		<Tip at={en5.from} top={700} label="易错">
			限制酶切的是<Hl>磷酸二酯键</Hl>，不是氢键；在原核生物中的作用是<Hl c={C.orange}>切割外源 DNA</Hl>，保护自身
		</Tip>
		<Narration t={t} />
	</Scene>
);
