import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.action;
const {ac2, ac3, ac4, ac5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Action: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">生长素的生理作用</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185, display: 'flex', gap: 28}}>
			<Appear at={ac2.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.orange}`, borderRadius: 24, padding: '22px 30px', background: '#fff', height: 220, boxSizing: 'border-box'}}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.orange}}>细胞水平</div>
					<div style={{fontSize: 31, fontWeight: 700, marginTop: 16, lineHeight: 1.6}}>促进细胞伸长生长<br />诱导细胞分化</div>
				</div>
			</Appear>
			<Appear at={ac3.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 24, padding: '22px 30px', background: '#fff', height: 220, boxSizing: 'border-box'}}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.green}}>器官水平</div>
					<div style={{fontSize: 31, fontWeight: 700, marginTop: 16, lineHeight: 1.6}}>促进侧根和不定根发生<br />影响花、叶和果实发育</div>
				</div>
			</Appear>
		</div>
		<div style={{position: 'absolute', left: 90, top: 450}}>
			<Chain
				fontSize={30}
				gap={10}
				steps={[
					{label: '生长素', color: C.orange, at: ac4.from},
					{label: '与生长素受体特异性结合', color: C.red, at: at(ac4.from, ac4.to, 0.25)},
					{label: '信号转导', at: at(ac4.from, ac4.to, 0.55)},
					{label: '诱导特定基因表达', color: C.green, at: at(ac4.from, ac4.to, 0.75)},
				]}
			/>
		</div>
		<Appear at={ac5.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				生长素是<Hl>传递信息</Hl>的分子：不直接参与细胞代谢，不提供能量，不起催化作用
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
