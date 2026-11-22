import React from 'react';
import {Appear, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Chem} from '../components/chem';
import {Cards, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.vinegar;
const {vi1, vi2, vi3, vi4, vi5} = t.cue;

export const Vinegar: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">果醋的制作</Header>
		<Cards
			top={170}
			height={170}
			fontSize={30}
			titleSize={34}
			items={[
				{title: '醋酸菌 · 好氧细菌', color: C.orange, at: vi1.from, body: <>只有在<Hl>氧气充足</Hl>时才能进行旺盛的生命活动</>},
				{title: '温度', color: C.red, at: vi2.from, body: <span style={{fontSize: 60, fontWeight: 900, color: C.red}}>30～35 ℃</span>},
			]}
		/>
		<Appear at={vi3.from} style={{position: 'absolute', left: 90, top: 390, fontSize: 30, fontWeight: 800, color: C.green}}>
			氧气、糖源都充足
		</Appear>
		<Flow style={{left: 420, top: 375}} fontSize={34} rows={[[{label: '糖', at: vi3.from}, {label: '乙酸', color: C.green, at: vi3.from + 10}]]} />
		<Appear at={vi4.from} style={{position: 'absolute', left: 90, top: 505, fontSize: 30, fontWeight: 800, color: C.orange}}>
			缺少糖源（有氧）
		</Appear>
		<Flow
			style={{left: 420, top: 490}}
			fontSize={34}
			rows={[[{label: '乙醇', at: vi4.from}, {label: '乙醛', at: vi4.from + 10}, {label: '乙酸', color: C.orange, at: vi4.from + 20}]]}
		/>
		<Appear at={vi4.from + 30} style={{position: 'absolute', left: 1080, right: 90, top: 400}}>
			<Card style={{fontSize: 30, fontWeight: 800, textAlign: 'center', lineHeight: 1.6}}>
				<Chem>C2H5OH</Chem> + <Chem>O2</Chem> → <Chem>CH3COOH</Chem> + <Chem>H2O</Chem>
				<div style={{fontSize: 26, color: C.muted}}>果酒 → 果醋的主要反应</div>
			</Card>
		</Appear>
		<Tip at={vi5.from} top={660} label="易错">
			果酒变果醋要改<Hl>两个条件</Hl>：温度升到 <Hl>30～35 ℃</Hl>，并且<Hl>通入无菌空气</Hl>（醋酸菌好氧，短时缺氧也会受影响）
		</Tip>
		<Narration t={t} />
	</Scene>
);
