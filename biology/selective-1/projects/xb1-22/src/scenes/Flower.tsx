import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.flower;
const {fl2, fl3, fl4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Card: React.FC<{title: string; color: string; children: React.ReactNode}> = ({title, color, children}) => (
	<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 300, boxSizing: 'border-box', overflow: 'hidden'}}>
		<div style={{background: color, color: '#fff', fontSize: 38, fontWeight: 900, padding: '12px 28px'}}>{title}</div>
		<div style={{padding: '20px 28px', fontSize: 31, fontWeight: 700, lineHeight: 1.6}}>{children}</div>
	</div>
);

export const Flower: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">光对种子萌发和开花的影响</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 28}}>
			<Appear at={fl2.from} style={{flex: 1}}>
				<Card title="种子萌发" color={C.orange}>
					有些种子需要<Hl c={C.orange}>光</Hl>才能萌发
					<br />例：莴苣、烟草的种子
				</Card>
			</Appear>
			<Appear at={fl3.from} style={{flex: 1}}>
				<Card title="开花：与昼夜长短有关" color={C.green}>
					<Hl c={C.orange}>短日照</Hl>开花：菊花
					<br />
					<Appear at={at(fl3.from, fl3.to, 0.6)} dy={6}>
						<Hl c={C.green}>长日照</Hl>开花：小麦
					</Appear>
				</Card>
			</Appear>
		</div>
		<Appear at={fl4.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="考法" style={{fontSize: 30}}>
				人工<Hl c={C.orange}>延长或缩短光照时间</Hl>，控制开花时间，如让菊花提前或推迟开花
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
