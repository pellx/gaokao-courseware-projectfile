import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.diagnose;
const {dx1, dx2, dx3, dx4, dx5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const hi = <span style={{color: C.red, fontWeight: 900}}>偏高</span>;
const lo = <span style={{color: C.green, fontWeight: 900}}>偏低</span>;
const site = (s: string, color: string) => <span style={{color, fontWeight: 900, fontSize: 34}}>{s}</span>;

export const Diagnose: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点八">根据激素水平判断病变部位</Header>
			<Appear at={dx1.from} style={{position: 'absolute', left: 90, top: 175, fontSize: 32, fontWeight: 800}}>
				甲状腺激素<Hl c={C.green}>偏低</Hl>的病人，病变在哪里？
			</Appear>
			<div style={{position: 'absolute', left: 90, width: 1100, top: 250}}>
				<Table
					head={['TRH', 'TSH', '甲状腺激素', '病变部位']}
					cols="1fr 1fr 1fr 1.2fr"
					at={dx2.from - 10}
					fontSize={31}
					rowHeight={80}
					focus={frame >= dx5.from}
					rows={[
						{cells: [hi, hi, lo, site('甲状腺', C.red)], at: dx2.from, key: true},
						{cells: [hi, lo, lo, site('垂体', C.orange)], at: dx3.from, key: true},
						{cells: [lo, lo, lo, site('下丘脑', C.brown)], at: at(dx3.from, dx3.to, 0.55), key: true},
					]}
				/>
			</div>
			<div style={{position: 'absolute', left: 1250, right: 90, top: 250, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Appear at={dx4.from} style={{fontSize: 30, fontWeight: 900}}>
					注射TRH后测TSH：
				</Appear>
				<Chain fontSize={28} gap={8} steps={[{label: 'TSH升高', color: C.red, at: at(dx4.from, dx4.to, 0.3)}, {label: '下丘脑病变', color: C.brown, at: at(dx4.from, dx4.to, 0.45)}]} />
				<Chain fontSize={28} gap={8} steps={[{label: 'TSH不升高', color: C.green, at: at(dx4.from, dx4.to, 0.7)}, {label: '垂体病变', color: C.orange, at: at(dx4.from, dx4.to, 0.85)}]} />
			</div>
			<Appear at={dx5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
				<Callout label="解题方法" style={{fontSize: 29, padding: '12px 24px'}}>
					找<Hl c={C.green}>偏低</Hl>的最上面一级激素：它的上一级<Hl>偏高</Hl>（或它就是TRH）→ 病变在分泌它的那一级
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
