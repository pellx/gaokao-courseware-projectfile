import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.types;
const {ty2, ty3, ty4} = t.cue;

const Kind: React.FC<{color: string; title: string; note: string; examples: string}> = ({color, title, note, examples}) => (
	<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 330, boxSizing: 'border-box', padding: '24px 30px'}}>
		<div style={{fontSize: 40, fontWeight: 900, color}}>{title}</div>
		<div style={{fontSize: 29, fontWeight: 700, color: C.muted, marginTop: 14, lineHeight: 1.5}}>{note}</div>
		<div style={{fontSize: 34, fontWeight: 900, marginTop: 24}}>例：{examples}</div>
	</div>
);

export const Types: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">植物生长调节剂的两大类</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 30}}>
			<Appear at={ty2.from} style={{flex: 1}}>
				<Kind color={C.orange} title="与植物激素类似" note="分子结构和生理效应都与植物激素类似" examples="吲哚丁酸" />
			</Appear>
			<Appear at={ty3.from} style={{flex: 1}}>
				<Kind color={C.green} title="与植物激素完全不同" note="分子结构完全不同，但生理效应类似" examples="α-萘乙酸、矮壮素" />
			</Appear>
		</div>
		<Appear at={ty4.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="考法" style={{fontSize: 30}}>
				是不是调节剂 → 看<Hl>来源</Hl>；属于哪一类 → 看<Hl c={C.orange}>分子结构</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
