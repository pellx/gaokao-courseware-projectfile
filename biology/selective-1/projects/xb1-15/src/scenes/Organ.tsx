import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.organ;
const {og1, og2, og3, og4, og5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const r = (s: string) => <span style={{color: C.red, fontWeight: 800}}>{s}</span>;
const o = (s: string) => <span style={{color: C.orange, fontWeight: 800}}>{s}</span>;

export const Organ: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">切除胸腺、破坏骨髓的影响</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185}}>
			<Table
				head={['处理', 'T细胞', 'B细胞', '细胞免疫', '体液免疫']}
				cols="1.1fr 1fr 1fr 1.1fr 1.6fr"
				at={og1.from}
				fontSize={32}
				rowHeight={80}
				rows={[
					{cells: ['切除胸腺', '不能成熟', '正常', r('全部丧失'), o('大部分丧失，保留少部分')], at: og2.from},
					{cells: ['破坏骨髓', '不能产生', '不能产生', r('全部丧失'), r('全部丧失')], at: og3.from},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 440, display: 'flex', gap: 24}}>
			{[
				['B细胞、T细胞都产生于', '骨髓', C.red],
				['T细胞成熟于', '胸腺', C.orange],
				['多数体液免疫需要', '辅助性T细胞', C.orange],
			].map(([pre, key, color], i) => (
				<Appear key={key} at={at(og4.from, og4.to, 0.15 + i * 0.25)} style={{flex: 1}}>
					<div style={{border: `4px solid ${color}`, borderRadius: 18, padding: '14px 20px', background: '#fff', fontSize: 29, fontWeight: 700, textAlign: 'center'}}>
						{pre}
						<Hl c={color}>{key}</Hl>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={og5.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				切除胸腺后体液免疫<Hl>不是完全丧失</Hl>：少数抗原可以直接刺激B细胞
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
