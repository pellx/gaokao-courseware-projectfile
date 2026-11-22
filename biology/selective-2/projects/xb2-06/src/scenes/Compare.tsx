import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4, cm5} = t.cue;

const b = (s: string) => <span style={{fontWeight: 800}}>{s}</span>;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">初生演替与次生演替的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185}}>
			<Table
				head={['比较项目', '初生演替', '次生演替']}
				cols="1fr 2fr 2fr"
				at={cm1.from}
				fontSize={30}
				rowHeight={90}
				headColor={C.green}
				rows={[
					{cells: [b('起点'), '没有土壤（裸岩、沙丘、冰川泥）', <span>有土壤，甚至有<Hl c={C.green}>繁殖体</Hl></span>], at: cm2.from},
					{cells: [b('时间、速度'), <span>时间<Hl>长</Hl>，速度<Hl>慢</Hl></span>, <span>时间<Hl c={C.green}>短</Hl>，速度<Hl c={C.green}>快</Hl></span>], at: cm3.from},
					{cells: [b('影响因素'), '自然因素为主', <span><Hl>人类活动</Hl>影响较大</span>], at: cm4.from},
				]}
			/>
		</div>
		<Appear at={cm5.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				火灾后的森林、弃耕农田看起来光秃秃，但<Hl>土壤还在</Hl> → <Hl>次生演替</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
