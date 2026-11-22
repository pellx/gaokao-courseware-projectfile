import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.urine;
const {ur1, ur2, ur3, ur4, ur5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Box: React.FC<{x: number; y: number; w: number; label: string; sub: string; color: string}> = ({x, y, w, label, sub, color}) => (
	<g>
		<rect x={x} y={y} width={w} height={100} rx={18} fill="#fff" stroke={color} strokeWidth={5} />
		<text x={x + w / 2} y={y + 46} fontSize={34} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
		<text x={x + w / 2} y={y + 82} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">{sub}</text>
	</g>
);

export const Urine: React.FC = () => {
	const aff = useRamp(at(ur2.from, ur2.to, 0.5), 16);
	const eff = useRamp(ur3.from, 16);
	const up = useRamp(at(ur3.from, ur3.to, 0.5), 16);
	const down = useRamp(ur4.from, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点三">排尿反射的分级调节</Header>
			<Appear at={ur1.from} style={{position: 'absolute', left: 90, top: 165}}>
				<svg width={900} height={600} viewBox="0 0 900 600">
					<Defs />
					<Box x={250} y={10} w={400} label="大脑皮层" sub="高级中枢：产生尿意、控制排尿" color={C.red} />
					<Box x={250} y={250} w={400} label="脊髓" sub="排尿反射的低级中枢" color={C.green} />
					<Box x={250} y={490} w={400} label="膀胱" sub="感受器 / 效应器" color={C.orange} />
					<g opacity={aff}>
						<line x1={330} y1={490} x2={330} y2={362} stroke={C.orange} strokeWidth={7} markerEnd="url(#arrow-orange)" />
						<text x={315} y={440} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="end">传入神经</text>
					</g>
					<g opacity={eff}>
						<line x1={570} y1={350} x2={570} y2={478} stroke={C.green} strokeWidth={7} markerEnd="url(#arrow-green)" />
						<text x={585} y={440} fontSize={26} fontWeight={800} fill={C.green}>传出神经：膀胱收缩</text>
					</g>
					<g opacity={up}>
						<line x1={380} y1={250} x2={380} y2={122} stroke={C.red} strokeWidth={7} markerEnd="url(#arrow-red)" />
						<text x={365} y={200} fontSize={26} fontWeight={800} fill={C.red} textAnchor="end">上传：产生尿意</text>
					</g>
					<g opacity={down}>
						<line x1={520} y1={110} x2={520} y2={238} stroke={C.red} strokeWidth={7} strokeDasharray="14 8" markerEnd="url(#arrow-red)" />
						<text x={535} y={200} fontSize={26} fontWeight={800} fill={C.red}>下行：控制排尿</text>
					</g>
				</svg>
			</Appear>
			<div style={{position: 'absolute', left: 1080, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
				<Appear at={ur2.from}>
					膀胱充盈 → 感受器兴奋 → 传入神经 → <Hl c={C.green}>脊髓排尿中枢</Hl>
				</Appear>
				<Appear at={ur3.from}>
					→ 传出神经 → <Hl c={C.green}>膀胱收缩、排尿</Hl>
				</Appear>
				<Appear at={at(ur3.from, ur3.to, 0.5)}>
					→ 上传到<Hl>大脑皮层</Hl> → 产生<Hl c={C.orange}>尿意</Hl>
				</Appear>
				<Appear at={ur4.from}>
					大脑皮层可通过脊髓<Hl>控制</Hl>排尿（“憋尿”）
				</Appear>
			</div>
			<Appear at={ur5.from} style={{position: 'absolute', left: 1080, right: 90, top: 720}}>
				<Callout label="考法" style={{fontSize: 28, padding: '12px 22px'}}>
					<Hl c={C.green}>低级中枢在脊髓</Hl>，<Hl>高级中枢在大脑皮层</Hl>，脊髓受大脑皮层调控
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
