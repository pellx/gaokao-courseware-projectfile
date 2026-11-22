import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.treat;
const {tr1, tr2, tr3, tr4, tr5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const g = (s: string) => <span style={{color: C.green, fontWeight: 800}}>{s}</span>;
const o = (s: string) => <span style={{color: C.orange, fontWeight: 800}}>{s}</span>;

export const Treat: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">免疫预防与免疫治疗</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '免疫预防', '免疫治疗']}
				cols="1fr 1.6fr 1.6fr"
				at={tr1.from}
				fontSize={31}
				rowHeight={72}
				rows={[
					{cells: ['时间', g('患病前'), o('患病后')], at: tr2.from},
					{cells: ['注射', g('疫苗（抗原）'), o('抗体、细胞因子；或免疫抑制剂')], at: at(tr2.from, tr2.to, 0.3)},
					{cells: ['机体', g('主动产生抗体和记忆细胞'), o('直接获得抗体，不产生记忆细胞')], at: tr3.from},
					{cells: ['特点', g('见效慢，作用持久'), o('见效快，维持时间短')], at: tr4.from},
				]}
			/>
		</div>
		<Appear at={at(tr4.from, tr4.to, 0.2)} style={{position: 'absolute', left: 90, right: 90, top: 548, fontSize: 30, fontWeight: 700, color: C.muted}}>
			例：被毒蛇咬伤 → 注射<Hl c={C.orange}>抗蛇毒血清</Hl>（含抗体）
		</Appear>
		<Appear at={tr5.from} style={{position: 'absolute', left: 90, right: 90, top: 630}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				注射<Hl c={C.green}>抗原</Hl> → 预防、慢而久；注射<Hl c={C.orange}>抗体</Hl> → 快而短；被狂犬咬伤：疫苗和抗体<Hl>都要注射</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
