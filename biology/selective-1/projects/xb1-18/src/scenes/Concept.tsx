import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cc1, cc2, cc3, cc4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const HORMONES = ['生长素', '赤霉素', '细胞分裂素', '脱落酸', '乙烯', '油菜素内酯'];

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">植物激素的概念</Header>
		<Appear at={cc1.from} style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Card style={{fontSize: 33, lineHeight: 1.7}}>
				<Hl>植物体内产生</Hl> → 从<Hl c={C.orange}>产生部位运送到作用部位</Hl> → 对生长发育有<Hl c={C.green}>显著影响</Hl>的<Hl c={C.green}>微量有机物</Hl>
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 360, display: 'flex', gap: 16}}>
			{HORMONES.map((h, i) => (
				<Appear key={h} at={at(cc2.from, cc2.to, 0.05 + i * 0.13)} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.green}`, borderRadius: 16, padding: '14px 0', textAlign: 'center', fontSize: 30, fontWeight: 900, color: C.green}}>{h}</div>
				</Appear>
			))}
		</div>
		<Appear at={cc3.from} style={{position: 'absolute', left: 90, right: 90, top: 480, fontSize: 31, fontWeight: 800}}>
			与动物激素不同：植物<Hl>没有专门的分泌器官</Hl>
		</Appear>
		<Appear at={cc4.from} style={{position: 'absolute', left: 90, right: 90, top: 580}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				人工合成的<Hl c={C.orange}>2,4-D、萘乙酸</Hl>不是植物激素，而是<Hl>植物生长调节剂</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
