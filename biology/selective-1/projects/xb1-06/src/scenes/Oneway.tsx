import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.oneway;
const {ow1, ow2, ow3, ow4} = t.cue;

export const Oneway: React.FC = () => {
	const why = useRamp(ow2.from, 16);
	const slow = useRamp(ow3.from, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点五">单向传递与突触延搁</Header>
			<Appear at={ow1.from} style={{position: 'absolute', left: 90, top: 170}}>
				<svg width={1740} height={330} viewBox="0 0 1740 330">
					<Defs />
					<circle cx={140} cy={150} r={60} fill="#f6d7b0" stroke={C.brown} strokeWidth={5} />
					<text x={140} y={160} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">神经元甲</text>
					<line x1={200} y1={150} x2={780} y2={150} stroke={C.brown} strokeWidth={10} />
					<circle cx={800} cy={150} r={26} fill={C.orange} />
					<line x1={840} y1={110} x2={840} y2={190} stroke={C.green} strokeWidth={8} />
					<circle cx={1010} cy={150} r={60} fill="#f6d7b0" stroke={C.brown} strokeWidth={5} />
					<text x={1010} y={160} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">神经元乙</text>
					<line x1={845} y1={150} x2={950} y2={150} stroke={C.brown} strokeWidth={6} />
					<line x1={1070} y1={150} x2={1640} y2={150} stroke={C.brown} strokeWidth={10} />
					<text x={820} y={90} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="middle">突触</text>
					<line x1={300} y1={240} x2={1500} y2={240} stroke={C.green} strokeWidth={8} markerEnd="url(#arrow-green)" />
					<text x={900} y={290} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">✓ 甲 → 乙</text>
					<g opacity={why}>
						<line x1={1500} y1={40} x2={300} y2={40} stroke={C.red} strokeWidth={8} markerEnd="url(#arrow-red)" opacity={0.5} />
						<text x={1560} y={50} fontSize={30} fontWeight={900} fill={C.red}>✗ 乙 → 甲</text>
					</g>
				</svg>
			</Appear>
			<Appear at={ow2.from} style={{position: 'absolute', left: 90, right: 90, top: 520, fontSize: 32, fontWeight: 700, lineHeight: 1.6}}>
				原因：递质只存在于<Hl c={C.orange}>突触小泡</Hl>中，只能由<Hl c={C.orange}>突触前膜</Hl>释放，作用于<Hl c={C.green}>突触后膜</Hl>
			</Appear>
			<Appear at={ow3.from} style={{position: 'absolute', left: 90, right: 90, top: 600, fontSize: 32, fontWeight: 700, lineHeight: 1.6, opacity: slow}}>
				<Hl c={C.brown}>突触延搁</Hl>：释放 → 扩散 → 与受体结合，需要时间 → 突触处传递<Hl c={C.brown}>比神经纤维上慢</Hl>
			</Appear>
			<Appear at={ow4.from} style={{position: 'absolute', left: 90, right: 90, top: 710}}>
				<Callout label="考法" style={{fontSize: 30}}>
					突触越多，反射所需时间<Hl>越长</Hl>；反射弧中单向传递，原因在<Hl>突触</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
