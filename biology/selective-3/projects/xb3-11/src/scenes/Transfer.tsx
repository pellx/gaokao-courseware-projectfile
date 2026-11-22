import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.transfer;
const {tr1, tr2, tr3, tr4} = t.cue;

export const Transfer: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">胚胎移植的概念</Header>
		<Def at={tr1.from} fontSize={31} style={{left: 90, right: 90, top: 165}}>
			<Hl>胚胎移植</Hl>：将胚胎移植到<Hl>同种的、生理状态相同的</Hl>雌性动物体内，使之继续发育为新个体
		</Def>
		<Cards
			top={320}
			height={250}
			titleSize={40}
			fontSize={32}
			gap={36}
			items={[
				{title: '供体', color: C.orange, at: tr2.from, body: <>提供胚胎<br /><Hl c={C.green}>遗传性状优良</Hl></>},
				{title: '受体', color: C.green, at: tr2.from + 20, body: <>接受胚胎、孕育后代<br /><Hl c={C.green}>体质健康、繁殖能力正常</Hl></>},
			]}
		/>
		<Tip at={tr4.from} top={640} label="易错">
			后代的遗传物质来自<Hl>供体</Hl>；受体只提供<Hl>胚胎发育的场所</Hl>，不影响后代的遗传特性
		</Tip>
		<Narration t={t} />
	</Scene>
);
