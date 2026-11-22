import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.necrosis;
const {nc1, nc2, nc3} = t.cue;

export const Necrosis: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">细胞凋亡与细胞坏死的比较</Header>
		<Appear at={nc1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={nc1.from}
				cols="260px 1fr 1fr"
				fontSize={32}
				rowHeight={84}
				head={['比较项目', '细胞凋亡', '细胞坏死']}
				rows={[
					{at: nc1.from, cells: ['原因', <><Hl c={C.green}>基因控制</Hl>的程序性死亡</>, <>不利因素使代谢<Hl>受损或中断</Hl></>]},
					{at: nc2.from, cells: ['性质', <Hl c={C.green}>主动</Hl>, <Hl>被动</Hl>]},
					{at: nc2.from + 40, cells: ['影响', <Hl c={C.green}>对机体有利</Hl>, <Hl>对机体有害</Hl>]},
					{at: nc2.from + 70, cells: ['实例', '蝌蚪尾消失、感染细胞的清除', '烫伤、缺氧导致细胞死亡']},
				]}
			/>
		</Appear>
		<Tip at={nc3.from} top={600} label="解题方法">
			看原因：<Hl c={C.green}>自然的、程序性的</Hl>是凋亡；<Hl>极端理化因素或严重病理刺激</Hl>引起的是坏死
		</Tip>
		<Narration t={t} />
	</Scene>
);
