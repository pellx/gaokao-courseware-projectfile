import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Big, Board, Items} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {Orb} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.theory;
const {th1, th1b, th2, th3, th4} = t.cue;

export const Theory: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="杂化轨道理论"
		callout={{label: '易错', at: th4.from, text: <>杂化只在<Hl>形成分子时</Hl>发生；杂化轨道<Hl>不形成 π 键</Hl></>}}
		overlay={
			<AnimeBeat k="wok" from={th1b.from} to={th1b.to}>
				杂化 = <span style={{color: C.red}}>一锅炒</span>：{'\n'}能量相近的轨道混在一起{'\n'}变成一样的杂化轨道
			</AnimeBeat>
		}
	>
		<Big at={th1.from} size={34}>中心原子<Hl>能量相近</Hl>的原子轨道混杂，重新组合成<Hl>同样数目</Hl>的新轨道</Big>
		<Appear at={th1.from + 30} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, fontSize: 40, fontWeight: 900}}>
			<span style={{fontSize: 32}}>C：</span>
			<Orb at={th1.from + 30} size={66} levels={[{label: '2s', e: ['ud']}, {label: '2p', e: ['u', 'u', '']}]} />
			<span style={{color: C.orange}}>→</span>
			<Orb at={th1.from + 30} size={66} levels={[{label: 'sp³', e: ['u', 'u', 'u', 'u'], color: C.red}]} />
			<span style={{fontSize: 30, color: C.red}}>4 个能量相同的<br />sp<sup>3</sup> 杂化轨道</span>
		</Appear>
		<Items
			size={32}
			gap={14}
			items={[
				{at: th2.from, node: <>杂化轨道数 = 参与杂化的轨道数 = <Hl>价层电子对数</Hl></>},
				{at: th3.from, node: <>杂化轨道只形成 <Hl>σ 键</Hl>、容纳<Hl c={C.orange}>孤电子对</Hl>；未杂化的 p 轨道形成 π 键</>},
			]}
		/>
	</Board>
);
