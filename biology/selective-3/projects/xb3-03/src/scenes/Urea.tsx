import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Def, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.urea;
const {ur1, ur2, ur3, ur4} = t.cue;

export const Urea: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">分离土壤中分解尿素的细菌</Header>
		<Flow
			style={{left: 90, top: 175}}
			fontSize={36}
			arrows={[[undefined, '脲酶']]}
			rows={[[{label: '尿素', at: ur1.from}, {label: '氨', color: C.orange, at: ur1.from + 15}]]}
		/>
		<Def at={ur2.from} fontSize={32} style={{left: 90, width: 1260, top: 300}}>
			培养基以<Hl>尿素为唯一氮源</Hl> → 其他微生物缺少氮源，不能生长
		</Def>
		<Flow
			style={{left: 90, top: 450}}
			fontSize={34}
			rows={[
				['取土样', '样品稀释', '涂布平板', '培养', '观察计数'].map((s, i) => ({label: s, color: i === 1 || i === 2 ? C.orange : undefined, at: ur3.from + i * 10})),
			]}
		/>
		<Appear at={ur3.from} style={{position: 'absolute', left: 1430, top: 170, width: 400, height: 500}}>
			<Photo src="images/colonies.jpg" caption="涂布后长出的菌落" style={{width: '100%', height: '100%'}} pos="center 55%" />
		</Appear>
		<Tip at={ur4.from} top={720} label="易错">
			培养基中<Hl>不能再加牛肉膏、蛋白胨</Hl>等含氮物质，否则其他微生物也能生长，失去选择作用
		</Tip>
		<Narration t={t} />
	</Scene>
);
