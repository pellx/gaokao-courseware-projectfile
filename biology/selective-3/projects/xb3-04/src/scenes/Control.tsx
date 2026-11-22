import React from 'react';
import {Appear, Card, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.control;
const {cl1, cl2, cl3, cl4, cl5} = t.cue;

// Fermenter: tank body, cooling jacket, stirrer, air sparger, feed and sensors.
const K = {l: 230, r: 470, top: 90, bottom: 470};
const MID = (K.l + K.r) / 2;

export const Control: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">发酵过程的控制</Header>
		<svg width={780} height={580} viewBox="0 0 780 580" style={{position: 'absolute', left: 60, top: 150}}>
			<Defs />
			<G at={cl3.from}>
				<rect x={K.l - 26} y={K.top + 60} width={K.r - K.l + 52} height={K.bottom - K.top - 110} rx={20} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} strokeDasharray="12 8" />
				<rect x={K.l} y={K.top} width={K.r - K.l} height={K.bottom - K.top} rx={36} fill="#fff" stroke={C.text} strokeWidth={6} />
				<rect x={K.l + 6} y={K.top + 110} width={K.r - K.l - 12} height={K.bottom - K.top - 116} rx={30} fill="#fbecd3" />
				<rect x={MID - 34} y={K.top - 56} width={68} height={44} rx={8} fill={C.brown} />
				<line x1={MID} y1={K.top - 12} x2={MID} y2={K.bottom - 70} stroke={C.text} strokeWidth={6} />
				{[230, 360].map((y) => (
					<rect key={y} x={MID - 60} y={y} width={120} height={16} rx={4} fill={C.text} />
				))}
				<text x={MID + 50} y={K.top - 28} fontSize={24} fontWeight={800} fill={C.brown}>搅拌</text>
				<text x={K.l - 40} y={K.top + 46} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="end">冷却水夹套</text>
				<polyline points={`20,${K.bottom + 60} ${MID},${K.bottom + 60} ${MID},${K.bottom - 30}`} fill="none" stroke={C.green} strokeWidth={8} />
				<text x={20} y={K.bottom + 100} fontSize={24} fontWeight={800} fill={C.green}>通入无菌空气（溶解氧）</text>
				<polyline points={`${K.l + 40},${K.top} ${K.l + 40},${K.top - 40} ${K.l - 70},${K.top - 40}`} fill="none" stroke={C.red} strokeWidth={7} />
				<text x={K.l - 70} y={K.top - 54} fontSize={24} fontWeight={800} fill={C.red}>补料</text>
				<Arrow x1={K.r + 120} y1={210} x2={K.r + 4} y2={210} color={C.muted} width={4} />
				<Arrow x1={K.r + 120} y1={300} x2={K.r + 4} y2={300} color={C.muted} width={4} />
				<text x={K.r + 130} y={218} fontSize={24} fontWeight={800} fill={C.text}>温度检测</text>
				<text x={K.r + 130} y={308} fontSize={24} fontWeight={800} fill={C.text}>pH 检测</text>
			</G>
		</svg>
		<Bullets
			style={{left: 880, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: cl1.from, children: <>随时检测<Hl c={C.orange}>微生物数量、产物浓度</Hl></>},
				{at: cl1.from + 40, children: <>及时<Hl c={C.orange}>添加必需的营养组分</Hl></>},
				{at: cl2.from, color: C.red, children: <>严格控制<Hl>温度、pH、溶解氧</Hl></>},
			]}
		/>
		<Appear at={cl4.from} style={{position: 'absolute', left: 880, right: 90, top: 400}}>
			<Card style={{fontSize: 29, fontWeight: 700, lineHeight: 1.6}}>
				<div style={{fontSize: 31, fontWeight: 900, color: C.brown}}>例：谷氨酸棒状杆菌</div>
				<div><Hl c={C.green}>中性和弱碱性</Hl> → 积累谷氨酸</div>
				<div><Hl>酸性</Hl> → 易形成谷氨酰胺和 N-乙酰谷氨酰胺</div>
			</Card>
		</Appear>
		<Tip at={cl5.from} top={745} label="解题方法">
			环境条件不仅影响微生物的<Hl>生长繁殖</Hl>，也影响<Hl>代谢途径</Hl>，条件变了，产物也会变
		</Tip>
		<Narration t={t} />
	</Scene>
);
