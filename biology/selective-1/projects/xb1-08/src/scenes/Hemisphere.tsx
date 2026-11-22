import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hemisphere;
const {hm1, hm2, hm3, hm4} = t.cue;

const Side: React.FC<{at: number; title: string; color: string; soft: string; children: React.ReactNode}> = ({at, title, color, soft, children}) => (
	<Appear at={at} style={{flex: 1}}>
		<div style={{border: `5px solid ${color}`, background: soft, borderRadius: 28, padding: '26px 34px', height: 330, boxSizing: 'border-box'}}>
			<div style={{fontSize: 48, fontWeight: 900, color, marginBottom: 14}}>{title}</div>
			<div style={{fontSize: 34, fontWeight: 700, lineHeight: 1.7}}>{children}</div>
		</div>
	</Appear>
);

export const Hemisphere: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">左右半球的功能侧重</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 200, display: 'flex', alignItems: 'center', gap: 0}}>
			<Side at={hm1.from} title="左半球" color={C.red} soft={C.redSoft}>
				主导<Hl>语言功能</Hl>（大多数人）
				<Appear at={hm2.from} dy={0}>
					<Hl>逻辑思维</Hl>
				</Appear>
			</Side>
			<Appear at={hm3.from} dy={0} style={{width: 150, textAlign: 'center'}}>
				<div style={{height: 120, background: C.orange, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 30, fontWeight: 900, margin: '0 10px', lineHeight: 1.2}}>
					胼胝体
					<br />
					联系
				</div>
			</Appear>
			<Side at={hm2.from + 40} title="右半球" color={C.green} soft={C.greenSoft}>
				<Hl c={C.green}>形象思维</Hl>
				<br />
				音乐、绘画、空间识别
			</Side>
		</div>
		<Appear at={hm4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="考法" style={{fontSize: 30}}>
				左半球受损 → 失语：大多数人的<Hl>言语区在左半球</Hl>；右半球受损更多影响<Hl c={C.green}>空间识别</Hl>等形象思维
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
