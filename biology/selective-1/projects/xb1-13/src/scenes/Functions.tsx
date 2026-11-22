import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.functions;
const {fn2, fn3, fn4, fn5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// [function, target, what goes wrong, colour, cue]
const FNS: [string, string, string, string, {from: number; to: number}][] = [
	['免疫防御', '外来抗原性异物（病原体）', '过强：过敏反应\n过弱：反复感染', C.red, fn2],
	['免疫自稳', '自身衰老或损伤的细胞', '异常：自身免疫病', C.orange, fn3],
	['免疫监视', '体内突变的细胞（癌细胞）', '低下：肿瘤、持续病毒感染', C.green, fn4],
];

export const Functions: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">免疫系统的三大功能</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185, display: 'flex', gap: 28}}>
			{FNS.map(([name, target, bad, color, cue]) => (
				<Appear key={name} at={cue.from} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 400, boxSizing: 'border-box', overflow: 'hidden'}}>
						<div style={{background: color, color: '#fff', fontSize: 48, fontWeight: 900, textAlign: 'center', padding: '14px 0'}}>{name}</div>
						<div style={{padding: '22px 28px'}}>
							<div style={{fontSize: 26, fontWeight: 700, color: C.muted}}>对象</div>
							<div style={{fontSize: 32, fontWeight: 900, marginTop: 4}}>{target}</div>
							<Appear at={at(cue.from, cue.to, 0.55)} dy={10}>
								<div style={{fontSize: 26, fontWeight: 700, color: C.muted, marginTop: 24}}>功能异常</div>
								<div style={{fontSize: 30, fontWeight: 800, color, marginTop: 4, whiteSpace: 'pre-line', lineHeight: 1.45}}>{bad}</div>
							</Appear>
						</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={fn5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="考法" style={{fontSize: 30}}>
				对付<Hl>外来病原体</Hl> → 防御；清除<Hl c={C.orange}>衰老、损伤的细胞</Hl> → 自稳；清除<Hl c={C.green}>癌细胞</Hl> → 监视
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
