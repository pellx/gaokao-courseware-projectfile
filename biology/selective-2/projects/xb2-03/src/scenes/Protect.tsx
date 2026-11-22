import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.protect;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;

const STEPS: [string, string, React.ReactNode, number][] = [
	['调查', C.orange, <>种群数量、<Hl c={C.orange}>年龄结构</Hl>、性别比例</>, pr2.from],
	['找原因', C.red, <>大熊猫：<Hl>栖息地被破坏和碎片化</Hl>；竹子开花枯死</>, pr3.from],
	['定措施', C.green, <>建立<Hl c={C.green}>自然保护区</Hl>、建设生态廊道 → <Hl c={C.green}>提高K值</Hl></>, pr4.from],
];

export const Protect: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">种群研究的应用：保护濒危动物</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 200, display: 'flex', alignItems: 'center', gap: 16}}>
			{STEPS.map(([title, color, note, from], i) => (
				<React.Fragment key={title}>
					{i > 0 && (
						<Appear at={from} dy={0}>
							<div style={{fontSize: 56, color: C.muted, fontWeight: 900}}>→</div>
						</Appear>
					)}
					<Appear at={Math.max(from, pr1.from)} style={{flex: 1}}>
						<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 300, boxSizing: 'border-box', padding: '24px 28px'}}>
							<div style={{fontSize: 44, fontWeight: 900, color}}>{title}</div>
							<div style={{fontSize: 30, fontWeight: 700, marginTop: 18, lineHeight: 1.55}}>{note}</div>
						</div>
					</Appear>
				</React.Fragment>
			))}
		</div>
		<Appear at={pr5.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="考法" style={{fontSize: 31}}>
				措施要对准<Hl>影响数量的关键因素</Hl>；<Hl c={C.green}>提高环境容纳量</Hl>是保护濒危动物的根本措施
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
