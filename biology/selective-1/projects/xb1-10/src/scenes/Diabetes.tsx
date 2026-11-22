import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.diabetes;
const {db1, db2, db3, db4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const SIGNS: [string, string][] = [
	['多尿', '糖随尿排出，带走大量水'],
	['多饮', '失水多，口渴'],
	['多食', '细胞能量供应不足'],
	['体重减少', '脂肪、蛋白质分解增加'],
];

export const Diabetes: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">1型与2型糖尿病</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				head={['', '1型糖尿病', '2型糖尿病']}
				cols="0.6fr 1.4fr 1.8fr"
				at={db1.from}
				fontSize={30}
				rowHeight={70}
				rows={[
					{cells: ['病因', <Hl key="a">胰岛B细胞受损</Hl>, <Hl key="b" c={C.orange}>靶细胞对胰岛素不敏感（如受体异常）</Hl>], at: db1.from + 10},
					{cells: ['胰岛素含量', '偏低', '可能正常甚至偏高'], at: at(db2.from, db2.to, 0.55)},
					{cells: ['注射胰岛素', '有效', '效果往往不佳'], at: at(db2.from, db2.to, 0.8)},
				]}
			/>
		</div>
		<Appear at={db3.from} style={{position: 'absolute', left: 90, top: 470, fontSize: 34, fontWeight: 900}}>
			典型症状：<Hl>三多一少</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 530, display: 'flex', gap: 20}}>
			{SIGNS.map(([name, why], i) => (
				<Appear key={name} at={db3.from + 10 + i * 8} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.red}`, borderRadius: 18, padding: '12px 18px', background: '#fff', textAlign: 'center', height: 150, boxSizing: 'border-box'}}>
						<div style={{fontSize: 38, fontWeight: 900, color: C.red}}>{name}</div>
						<Appear at={at(db4.from, db4.to, 0.15 + i * 0.22)} dy={0} style={{fontSize: 25, fontWeight: 700, color: C.muted, marginTop: 6}}>
							{why}
						</Appear>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={db4.from} style={{position: 'absolute', left: 90, right: 90, top: 710}}>
			<Callout label="考法" style={{fontSize: 29, padding: '12px 24px'}}>
				解释“三多一少”：从<Hl>糖不能被利用</Hl>出发，推出失水、缺能、分解增加
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
