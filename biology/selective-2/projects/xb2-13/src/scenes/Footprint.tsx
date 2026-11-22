import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.footprint;
const {fp1, fp2, fp3, fp4} = t.cue;

export const Footprint: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">生态足迹的概念</Header>
		<Appear at={fp1.from} style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Card style={{fontSize: 31, fontWeight: 700, lineHeight: 1.6}}>
				<Hl>生态足迹</Hl>（生态占用）：现有技术条件下，维持某一人口单位生存所需的
				<Hl c={C.green}>生产资源</Hl>和<Hl c={C.orange}>吸纳废物</Hl>的土地及水域的面积
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 360, display: 'flex', gap: 26}}>
			<Appear at={fp2.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.orange}`, borderRadius: 22, padding: '18px 24px', fontSize: 30, fontWeight: 700, lineHeight: 1.5, height: 160, boxSizing: 'border-box'}}>
					<Hl c={C.orange}>人口单位</Hl>：一个人、一座城市、一个国家，乃至全人类
				</div>
			</Appear>
			<Appear at={fp3.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.red}`, borderRadius: 22, padding: '18px 24px', fontSize: 30, fontWeight: 700, lineHeight: 1.5, height: 160, boxSizing: 'border-box'}}>
					值<Hl>越大</Hl> → 所需资源越多 → 对生态环境<Hl>影响越大</Hl>
				</div>
			</Appear>
		</div>
		<Appear at={fp4.from} style={{position: 'absolute', left: 90, right: 90, top: 580}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				包括两部分：<Hl c={C.green}>生产资源</Hl>的面积 + <Hl c={C.orange}>吸纳废物</Hl>的面积（如吸收 CO<sub style={{fontSize: '0.6em'}}>2</sub> 的森林）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
