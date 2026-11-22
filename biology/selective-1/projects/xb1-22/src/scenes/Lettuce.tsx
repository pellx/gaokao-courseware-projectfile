import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lettuce;
const {le1, le2, le3, le4, le5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const R = <span style={{color: C.red, fontWeight: 900}}>红</span>;
const F = <span style={{color: C.brown, fontWeight: 900}}>远红</span>;
const seq = (n: number) => (
	<>
		{Array.from({length: n}, (_, i) => (
			<React.Fragment key={i}>
				{i > 0 && ' → '}
				{i % 2 ? F : R}
			</React.Fragment>
		))}
	</>
);
const rate = (v: string, high: boolean) => <span style={{color: high ? C.green : C.red, fontWeight: 900}}>{v}</span>;

export const Lettuce: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">红光、远红光与莴苣种子萌发</Header>
		<div style={{position: 'absolute', left: 90, width: 1060, top: 175}}>
			<Table
				head={['组别', '照射处理', '萌发率（约）']}
				cols="0.6fr 2.4fr 1fr"
				at={le1.from}
				fontSize={30}
				rowHeight={66}
				rows={[
					{cells: ['第1组', seq(1), rate('70%', true)], at: le2.from},
					{cells: ['第2组', seq(2), rate('6%', false)], at: at(le2.from, le2.to, 0.6)},
					{cells: ['第3组', seq(3), rate('74%', true)], at: le3.from},
					{cells: ['第4组', seq(4), rate('6%', false)], at: at(le3.from, le3.to, 0.3)},
					{cells: ['第5组', seq(5), rate('76%', true)], at: at(le3.from, le3.to, 0.6)},
				]}
			/>
		</div>
		<Appear at={le3.from} style={{position: 'absolute', left: 1200, right: 90, top: 200}}>
			<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '18px 26px', background: C.greenSoft, fontSize: 31, fontWeight: 800, lineHeight: 1.6}}>
				取决于<Hl>最后一次</Hl>照射的光
			</div>
		</Appear>
		<Appear at={le4.from} style={{position: 'absolute', left: 1200, right: 90, top: 340, fontSize: 29, fontWeight: 700, lineHeight: 1.6}}>
			光敏色素在两种形式间<Hl c={C.orange}>相互转化</Hl>：
			<br />
			吸收{R}光 → <Hl c={C.green}>有活性</Hl>，促进萌发
			<br />
			吸收{F}光 → <Hl>无活性</Hl>
		</Appear>
		<Appear at={le5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				看每组<Hl>最后一次</Hl>照射：以红光结尾 → 萌发率<Hl c={C.green}>高</Hl>；以远红光结尾 → 萌发率<Hl>低</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
