import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.recognize;
const {rz2, rz3, rz4, rz5} = t.cue;

const GROUPS: [string, string[], string, string, number][] = [
	['特异性识别', ['B细胞', '辅助性T细胞', '记忆B细胞'], '✓', C.green, rz2.from],
	['能识别，无特异性', ['树突状细胞', '巨噬细胞'], '△', C.orange, rz3.from],
	['不能识别', ['浆细胞'], '✗', C.red, rz4.from],
];

export const Recognize: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">哪些细胞能识别抗原</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 28}}>
			{GROUPS.map(([title, cells, mark, color, from]) => (
				<Appear key={title} at={from} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 400, boxSizing: 'border-box', overflow: 'hidden'}}>
						<div style={{background: color, color: '#fff', fontSize: 40, fontWeight: 900, textAlign: 'center', padding: '14px 0'}}>
							{mark} {title}
						</div>
						<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, paddingTop: 30}}>
							{cells.map((c) => (
								<div key={c} style={{fontSize: 38, fontWeight: 900, color}}>{c}</div>
							))}
						</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={rz5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				<Hl>浆细胞</Hl>是唯一不能识别抗原的；巨噬细胞、树突状细胞<Hl c={C.orange}>不具特异性</Hl>；其余淋巴细胞都能<Hl c={C.green}>特异性识别</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
