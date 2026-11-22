import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Defs} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;
const W = 52;
const X0 = 60;
const CODING = 'ATGGCTTAC';
const TEMPLATE = 'TACCGAATG';
const MRNA = 'AUGGCUUAC';

const Row: React.FC<{y: number; seq: string; color: string; fill?: string}> = ({y, seq, color, fill = '#fff'}) => (
	<g>
		{seq.split('').map((b, i) => (
			<g key={i}>
				<rect x={X0 + i * W + 3} y={y} width={W - 6} height={50} rx={8} fill={fill} stroke={color} strokeWidth={3} />
				<text x={X0 + i * W + W / 2} y={y + 36} fontSize={30} fontWeight={900} fill={color} textAnchor="middle">{b}</text>
			</g>
		))}
	</g>
);

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">转录的过程</Header>
		<svg width={900} height={520} viewBox="0 0 900 520" style={{position: 'absolute', left: 90, top: 165}}>
			<Defs />
			<G at={pr1.from}>
				<text x={X0 + CODING.length * W + 20} y={66} fontSize={26} fontWeight={800} fill={C.muted}>非模板链</text>
				<Row y={30} seq={CODING} color={C.muted} />
				<text x={X0 + TEMPLATE.length * W + 20} y={186} fontSize={26} fontWeight={900} fill={C.brown}>模板链</text>
				<Row y={150} seq={TEMPLATE} color={C.brown} />
			</G>
			<G at={pr2.from}>
				<Row y={300} seq={MRNA} color={C.red} fill={C.redSoft} />
				<text x={X0 + MRNA.length * W + 20} y={336} fontSize={26} fontWeight={900} fill={C.red}>mRNA</text>
				{MRNA.split('').map((_, i) => (
					<line key={i} x1={X0 + i * W + W / 2} y1={206} x2={X0 + i * W + W / 2} y2={296} stroke={C.green} strokeWidth={3} strokeDasharray="6 5" />
				))}
			</G>
			<G at={pr3.from}>
				<Arrow x1={X0} y1={400} x2={X0 + MRNA.length * W} y2={400} marker="arrow-red" color={C.red} />
				<text x={X0} y={445} fontSize={26} fontWeight={900} fill={C.red}>5′</text>
				<text x={X0 + MRNA.length * W} y={445} fontSize={26} fontWeight={900} fill={C.red} textAnchor="end">3′</text>
			</G>
		</svg>
		<Rows
			style={{left: 1000, right: 90, top: 180}}
			fontSize={30}
			gap={16}
			items={[
				{at: pr1.from, color: C.orange, title: '解旋', children: <>DNA 双链解开，碱基暴露</>},
				{at: pr2.from, color: C.red, title: '配对', children: <><Hl>A—U</Hl>、T—A、G—C、C—G</>},
				{at: pr3.from, color: C.red, title: '连接', children: <>RNA 聚合酶连接，由 <Hl>5′ → 3′</Hl> 延伸</>},
				{at: pr4.from, color: C.green, title: '释放', children: <>RNA 脱离模板，DNA 双链恢复</>},
			]}
		/>
		<Tip at={pr5.from} top={720} label="解题方法" fontSize={33}>
			由模板链写 mRNA：配对时 <Hl>A 配 U</Hl>；mRNA 序列与<Hl>非模板链</Hl>相同，只是 T 换成 U
		</Tip>
		<Narration t={t} />
	</Scene>
);
