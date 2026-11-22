import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {MitosisCell} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.interphase;
const {ip1, ip2, ip3} = t.cue;

export const Interphase: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">分裂间期</Header>
		<svg width={840} height={430} viewBox="0 0 740 380" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={ip1.from}>
				<MitosisCell cx={200} cy={150} stage="inter" />
				<text x={200} y={300} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">间期细胞（染色质）</text>
			</G>
			<G at={ip2.from}>
				<rect x={480} y={110} width={14} height={80} rx={7} fill={C.red} />
				<Arrow x1={520} y1={150} x2={620} y2={150} trim={[0, 0]} />
				<text x={570} y={130} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">复制</text>
				<rect x={655} y={110} width={14} height={80} rx={7} fill={C.red} />
				<rect x={673} y={110} width={14} height={80} rx={7} fill={C.red} />
				<circle cx={671} cy={150} r={8} fill="#fff" stroke={C.red} strokeWidth={3} />
				<text x={487} y={240} fontSize={26} fontWeight={800} fill={C.text} textAnchor="middle">1 条染色体</text>
				<text x={487} y={275} fontSize={26} fontWeight={800} fill={C.text} textAnchor="middle">1 个 DNA</text>
				<text x={671} y={240} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">1 条染色体</text>
				<text x={671} y={275} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">2 条单体、2 个 DNA</text>
			</G>
		</svg>
		<Bullets
			style={{left: 960, right: 90, top: 210}}
			fontSize={32}
			gap={24}
			items={[
				{at: ip1.from, color: C.red, children: <><Hl>DNA 复制</Hl>和<Hl>有关蛋白质的合成</Hl>，细胞适度生长</>},
				{at: ip2.from, color: C.orange, children: <>核 DNA <Hl>加倍</Hl>，染色体数目<Hl>不变</Hl></>},
			]}
		/>
		<Tip at={ip3.from} top={640} label="易错">
			间期是<Hl>染色质</Hl>状态，看不到染色体；间期不属于分裂期
		</Tip>
		<Narration t={t} />
	</Scene>
);
