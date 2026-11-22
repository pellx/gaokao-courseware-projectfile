import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.second;
const {sc1, sc2, sc3, sc4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const r = (s: string) => <span style={{color: C.red, fontWeight: 800}}>{s}</span>;

export const Second: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">二次免疫</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Chain
				fontSize={32}
				gap={12}
				arrows={['', '增殖、分化', '快速产生']}
				steps={[
					{label: '同种抗原再次侵入', color: C.red, at: sc1.from},
					{label: '记忆B细胞', color: C.orange, at: at(sc1.from, sc1.to, 0.25)},
					{label: '浆细胞', color: C.red, at: at(sc1.from, sc1.to, 0.55)},
					{label: '大量抗体', color: C.green, at: at(sc1.from, sc1.to, 0.8)},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, width: 1100, top: 320}}>
			<Table
				head={['比较项目', '初次免疫', '二次免疫']}
				cols="1fr 1.2fr 1.2fr"
				at={sc2.from}
				fontSize={32}
				rowHeight={70}
				rows={[
					{cells: ['反应速度', '较慢', r('更快')], at: at(sc2.from, sc2.to, 0.15)},
					{cells: ['抗体数量', '较少', r('更多、更强')], at: at(sc2.from, sc2.to, 0.35)},
					{cells: ['浆细胞来源', 'B细胞', r('主要来自记忆B细胞')], at: sc3.from},
				]}
			/>
		</div>
		<Appear at={at(sc2.from, sc2.to, 0.7)} style={{position: 'absolute', left: 1250, right: 90, top: 330}}>
			<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '20px 26px', background: C.greenSoft, fontSize: 32, fontWeight: 800, lineHeight: 1.5}}>
				往往在病原体<Hl c={C.green}>致病之前</Hl>就把它消灭了
			</div>
		</Appear>
		<Appear at={sc4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				记忆B细胞<Hl>不产生抗体</Hl>，先增殖、分化为浆细胞；记忆细胞只对<Hl>同种抗原</Hl>起作用
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
