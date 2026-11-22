import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.temp;
const {tp2, tp3, tp4} = t.cue;

export const Temp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">温度：春化作用与年轮</Header>
		<Appear at={tp2.from} style={{position: 'absolute', left: 90, width: 1000, top: 190}}>
			<div style={{border: `5px solid ${C.green}`, borderRadius: 24, padding: '20px 30px', background: '#fff'}}>
				<div style={{fontSize: 40, fontWeight: 900, color: C.green}}>春化作用</div>
				<div style={{fontSize: 30, fontWeight: 700, marginTop: 10, lineHeight: 1.5}}>
					经历<Hl>一段时间的低温</Hl>诱导，促使植物开花
					<br />例：冬小麦、冬大麦
				</div>
			</div>
		</Appear>
		<Appear at={tp3.from} style={{position: 'absolute', left: 90, width: 1000, top: 410}}>
			<div style={{border: `5px solid ${C.brown}`, borderRadius: 24, padding: '20px 30px', background: '#fff'}}>
				<div style={{fontSize: 40, fontWeight: 900, color: C.brown}}>年轮</div>
				<div style={{fontSize: 30, fontWeight: 700, marginTop: 10, lineHeight: 1.5}}>
					春夏：分裂快、细胞大 → 颜色<Hl c={C.orange}>浅</Hl>
					<br />
					秋冬：分裂慢、细胞小 → 颜色<Hl c={C.brown}>深</Hl>
				</div>
			</div>
		</Appear>
		<Appear at={tp3.from} style={{position: 'absolute', right: 90, top: 190, width: 600, height: 440}}>
			<Photo src="images/rings.jpg" caption="山毛榉树桩的年轮" style={{width: '100%', height: '100%'}} pos="35% center" />
		</Appear>
		<Appear at={tp4.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="考法" style={{fontSize: 29, padding: '12px 24px'}}>
				冬小麦春季播种 → 未经低温 → <Hl>不能正常开花结实</Hl>；年轮体现温度对<Hl c={C.orange}>生长速度</Hl>的影响
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
