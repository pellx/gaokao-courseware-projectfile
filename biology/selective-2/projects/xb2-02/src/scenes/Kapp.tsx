import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.kapp;
const {ka1, ka2, ka3, ka4, ka5, ka6} = t.cue;

const b = (s: string, c: string) => <span style={{color: c, fontWeight: 800}}>{s}</span>;

export const Kapp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">K值与K/2的应用</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185}}>
			<Table
				head={['应用', '做法', '原理']}
				cols="1.1fr 2fr 1.6fr"
				at={ka1.from}
				fontSize={30}
				rowHeight={96}
				rows={[
					{cells: [b('渔业捕捞', C.orange), <span>捕捞后<Hl>剩余量维持在 K/2</Hl> 左右</span>, 'K/2 时增长速率最快，可持续高产'], at: ka2.from},
					{cells: [b('灭鼠等防治', C.red), <span>硬化地面、储粮、养殖天敌，<Hl>降低K值</Hl>；在 K/2 前<Hl>及早防治</Hl></span>, '从根本上控制数量'], at: ka3.from},
					{cells: [b('保护濒危动物', C.green), <span>建立自然保护区，<Hl c={C.green}>提高K值</Hl></span>, '改善栖息环境'], at: ka5.from},
				]}
			/>
		</div>
		<Appear at={ka4.from} style={{position: 'absolute', left: 90, top: 560, fontSize: 30, fontWeight: 800, color: C.red}}>
			防治越早越好：数量越接近 K/2，增长越快，越难控制
		</Appear>
		<Appear at={ka6.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				是捕捞后<Hl>剩余 K/2</Hl>，不是数量到 K/2 就开始捕；灭鼠关键是<Hl>降低K值</Hl>，不是把数量控制在 K/2
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
