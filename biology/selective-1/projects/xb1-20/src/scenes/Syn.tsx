import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.syn;
const {sn2, sn3, sn4} = t.cue;

const Pair: React.FC<{title: string; color: string; process: string; a: [string, string]; b: [string, string]}> = ({title, color, process, a, b}) => (
	<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', overflow: 'hidden', height: 360}}>
		<div style={{background: color, color: '#fff', fontSize: 40, fontWeight: 900, padding: '12px 28px'}}>{title}</div>
		<div style={{padding: '18px 28px'}}>
			<div style={{fontSize: 27, fontWeight: 700, color: C.muted}}>同一过程：{process}</div>
			{[a, b].map(([h, e]) => (
				<div key={h} style={{fontSize: 32, fontWeight: 800, marginTop: 18}}>
					<Hl c={color}>{h}</Hl>：{e}
				</div>
			))}
		</div>
	</div>
);

export const Syn: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">协同与相抗衡</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185, display: 'flex', gap: 30}}>
			<Appear at={sn2.from} style={{flex: 1}}>
				<Pair title="协同" color={C.green} process="促进细胞分裂" a={['生长素', '主要促进细胞核分裂']} b={['细胞分裂素', '主要促进细胞质分裂']} />
			</Appear>
			<Appear at={sn3.from} style={{flex: 1}}>
				<Pair title="相抗衡" color={C.red} process="调节种子萌发" a={['赤霉素', '促进萌发']} b={['脱落酸', '抑制萌发']} />
			</Appear>
		</div>
		<Appear at={sn4.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				先锁定<Hl>同一生理过程</Hl>，再看作用方向：一致 → <Hl c={C.green}>协同</Hl>；相反 → <Hl>相抗衡</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
