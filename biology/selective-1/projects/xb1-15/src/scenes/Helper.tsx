import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.helper;
const {hp1, hp2, hp3, hp4, hp5} = t.cue;

const Box: React.FC<{color: string; title: string; lines: string[]}> = ({color, title, lines}) => (
	<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', padding: '18px 28px', height: 230, boxSizing: 'border-box'}}>
		<div style={{fontSize: 40, fontWeight: 900, color}}>{title}</div>
		{lines.map((l) => (
			<div key={l} style={{fontSize: 29, fontWeight: 700, marginTop: 12}}>
				{l}
			</div>
		))}
	</div>
);

export const Helper: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">辅助性T细胞：连接两种免疫</Header>
		<Appear at={hp1.from} style={{position: 'absolute', left: 710, top: 180, width: 500}}>
			<div style={{background: C.red, color: '#fff', borderRadius: 60, textAlign: 'center', fontSize: 42, fontWeight: 900, padding: '18px 0'}}>辅助性T细胞</div>
		</Appear>
		<Appear at={hp2.from} style={{position: 'absolute', left: 560, top: 280, fontSize: 60, color: C.orange, fontWeight: 900, transform: 'rotate(35deg)'}}>
			↙
		</Appear>
		<Appear at={hp3.from} style={{position: 'absolute', left: 1300, top: 280, fontSize: 60, color: C.green, fontWeight: 900, transform: 'rotate(-35deg)'}}>
			↘
		</Appear>
		<Appear at={hp2.from} style={{position: 'absolute', left: 90, width: 820, top: 370}}>
			<Box color={C.orange} title="体液免疫" lines={['提供激活B细胞的第二个信号', '分泌细胞因子，促进B细胞分裂、分化']} />
		</Appear>
		<Appear at={hp3.from} style={{position: 'absolute', right: 90, width: 820, top: 370}}>
			<Box color={C.green} title="细胞免疫" lines={['分泌细胞因子', '加速细胞毒性T细胞分裂、分化']} />
		</Appear>
		<Appear at={hp4.from} style={{position: 'absolute', left: 90, right: 90, top: 620, textAlign: 'center', fontSize: 32, fontWeight: 900}}>
			在<Hl>体液免疫和细胞免疫</Hl>中都起关键作用
		</Appear>
		<Appear at={hp5.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="考法" style={{fontSize: 30, padding: '12px 24px'}}>
				辅助性T细胞大量死亡（如感染HIV）→ <Hl>细胞免疫几乎丧失</Hl>，<Hl>体液免疫大大减弱</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
