import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.small;
const {sm1, sm2, sm3, sm4} = t.cue;

const Cell: React.FC<{x: number; y: number}> = ({x, y}) => <ellipse cx={x} cy={y} rx={24} ry={16} fill={C.brown} />;
const Colony: React.FC<{x: number; y: number}> = ({x, y}) => <circle cx={x} cy={y} r={58} fill={C.orange} opacity={0.85} />;

export const Small: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">计数结果为什么偏小</Header>
		<svg width={1080} height={440} viewBox="0 0 1080 440" style={{position: 'absolute', left: 90, top: 180}}>
			<Defs />
			<G at={sm1.from}>
				<Cell x={140} y={100} />
				<Arrow x1={220} y1={100} x2={520} y2={100} />
				<Colony x={620} y={100} />
				<text x={760} y={112} fontSize={32} fontWeight={900} fill={C.green}>1 个细胞 → 1 个菌落</text>
			</G>
			<G at={sm1.from + 40}>
				<Cell x={116} y={300} />
				<Cell x={164} y={300} />
				<Cell x={140} y={272} />
				<Arrow x1={220} y1={300} x2={520} y2={300} color={C.red} marker="arrow-red" />
				<Colony x={620} y={300} />
				<text x={760} y={292} fontSize={32} fontWeight={900} fill={C.red}>3 个细胞连在一起</text>
				<text x={760} y={340} fontSize={32} fontWeight={900} fill={C.red}>→ 仍只有 1 个菌落</text>
			</G>
		</svg>
		<Bullets
			style={{left: 1230, right: 90, top: 210}}
			fontSize={32}
			gap={30}
			items={[
				{at: sm2.from, color: C.red, children: <>统计的菌落数 <Hl>&lt;</Hl> 实际活菌数</>},
				{at: sm3.from, children: <>结果用<Hl c={C.orange}>“菌落数”</Hl>而不是活菌数表示</>},
			]}
		/>
		<Tip at={sm4.from} top={680} label="解题方法">
			偏小原因的标准答法：当<Hl>两个或多个细胞连在一起</Hl>时，平板上观察到的只是<Hl>一个菌落</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
