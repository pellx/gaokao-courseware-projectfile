import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.detect;
const {dt1, dt2, dt3, dt4, dt5} = t.cue;

const c = (s: string, color: string) => <span style={{color, fontWeight: 800}}>{s}</span>;

export const Detect: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">核酸检测、抗原检测与抗体检测</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['检测方法', '检测对象', '所用材料或原理', '特点']}
				cols="1fr 1.2fr 1.5fr 1.8fr"
				at={dt1.from}
				fontSize={30}
				rowHeight={84}
				rows={[
					{cells: [c('核酸检测', C.red), '病毒的遗传物质', 'PCR扩增等', '灵敏、准确，可早期诊断'], at: dt2.from},
					{cells: [c('抗原检测', C.orange), '病毒的蛋白质', c('已知的抗体', C.orange), '快速、简便'], at: dt3.from},
					{cells: [c('抗体检测', C.green), '血液中的抗体', c('已知的抗原', C.green), '感染一段时间后才能检出'], at: dt4.from},
				]}
			/>
		</div>
		<Appear at={dt5.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				抗原检测用<Hl c={C.orange}>抗体</Hl>，抗体检测用<Hl c={C.green}>抗原</Hl>；抗体检测阳性<Hl>不一定正在感染</Hl>（可能曾感染或接种过疫苗）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
