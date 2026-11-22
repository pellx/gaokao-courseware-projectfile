import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.light;
const {lt1, lt2, lt3, lt4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Light: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">光敏色素：接受光信号</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185, display: 'flex', gap: 24}}>
			<Appear at={lt1.from} style={{flex: 1}}>
				<div style={{border: `4px solid ${C.gold}`, borderRadius: 20, padding: '18px 26px', background: '#fff', fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
					光的作用：提供<Hl c={C.gold}>能量</Hl>（光合作用）+ 作为<Hl>信号</Hl>（调控生长发育）
				</div>
			</Appear>
			<Appear at={lt2.from} style={{flex: 1}}>
				<div style={{border: `4px solid ${C.red}`, borderRadius: 20, padding: '18px 26px', background: C.redSoft, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
					<Hl>光敏色素</Hl>：一类<Hl c={C.orange}>蛋白质</Hl>，各部位都有，<Hl c={C.orange}>分生组织</Hl>中较丰富
				</div>
			</Appear>
		</div>
		<div style={{position: 'absolute', left: 90, top: 400}}>
			<Chain
				fontSize={29}
				gap={8}
				steps={[
					{label: '红光、远红光', color: C.red, at: lt3.from},
					{label: '光敏色素结构改变', color: C.orange, at: at(lt3.from, lt3.to, 0.2)},
					{label: '信号传到细胞核', at: at(lt3.from, lt3.to, 0.45)},
					{label: '特定基因表达', color: C.red, at: at(lt3.from, lt3.to, 0.65)},
					{label: '生物学效应', color: C.green, at: at(lt3.from, lt3.to, 0.85)},
				]}
			/>
		</div>
		<Appear at={lt4.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				光敏色素是<Hl>蛋白质</Hl>，不是光合色素；这里光是<Hl>信号</Hl>，不是能量来源
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
