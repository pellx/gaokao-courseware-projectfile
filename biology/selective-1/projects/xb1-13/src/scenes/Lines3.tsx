import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lines3;
const {ln2, ln3, ln4, ln5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const ROWS: [string, string, string, string, number][] = [
	['第一道防线', '皮肤、黏膜', '阻挡；纤毛清扫；唾液、泪液、胃液中的杀菌物质', C.orange, ln2.from],
	['第二道防线', '体液中的杀菌物质和吞噬细胞', '溶菌酶；巨噬细胞、树突状细胞吞噬病原体', C.orange, ln3.from],
	['第三道防线', '免疫器官和免疫细胞', '借助血液循环和淋巴循环', C.green, ln4.from],
];

export const Lines3: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">人体的三道防线</Header>
		<div style={{position: 'absolute', left: 90, width: 1420, top: 185, display: 'flex', flexDirection: 'column', gap: 18}}>
			{ROWS.map(([name, part, note, color, from]) => (
				<Appear key={name} at={from} dx={-30} dy={0}>
					<div style={{display: 'flex', alignItems: 'center', border: `4px solid ${color}`, borderRadius: 20, background: '#fff', height: 120, overflow: 'hidden'}}>
						<div style={{background: color, color: '#fff', fontSize: 36, fontWeight: 900, width: 260, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{name}</div>
						<div style={{padding: '0 28px'}}>
							<div style={{fontSize: 34, fontWeight: 900}}>{part}</div>
							<div style={{fontSize: 26, fontWeight: 600, color: C.muted, marginTop: 4}}>{note}</div>
						</div>
					</div>
				</Appear>
			))}
		</div>
		{/* braces grouping the lines into the two kinds of immunity */}
		<Appear at={at(ln3.from, ln3.to, 0.8)} dx={20} dy={0} style={{position: 'absolute', left: 1540, top: 185, height: 258, display: 'flex', alignItems: 'center', gap: 16}}>
			<div style={{width: 20, height: '100%', borderRight: `6px solid ${C.orange}`, borderTop: `6px solid ${C.orange}`, borderBottom: `6px solid ${C.orange}`, borderRadius: '0 16px 16px 0', boxSizing: 'border-box'}} />
			<div style={{fontSize: 34, fontWeight: 900, color: C.orange, lineHeight: 1.3}}>非特异性<br />免疫</div>
		</Appear>
		<Appear at={at(ln4.from, ln4.to, 0.6)} dx={20} dy={0} style={{position: 'absolute', left: 1540, top: 461, height: 120, display: 'flex', alignItems: 'center', gap: 16}}>
			<div style={{width: 20, height: '100%', borderRight: `6px solid ${C.green}`, borderTop: `6px solid ${C.green}`, borderBottom: `6px solid ${C.green}`, borderRadius: '0 16px 16px 0', boxSizing: 'border-box'}} />
			<div style={{fontSize: 34, fontWeight: 900, color: C.green, lineHeight: 1.3}}>特异性<br />免疫</div>
		</Appear>
		<Appear at={ln5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '14px 24px'}}>
				唾液、泪液、胃液在与外界相通的腔道中 → 其中的杀菌物质属于<Hl>第一道防线</Hl>
				<br />
				<Hl c={C.green}>解题方法</Hl>：先看物质在<Hl c={C.orange}>体表、腔道</Hl>，还是在<Hl c={C.green}>体液</Hl>中
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
