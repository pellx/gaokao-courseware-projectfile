import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hormones;
const {hm1, hm2, hm3, hm4, hm5} = t.cue;

const Card: React.FC<{at: number; color: string; soft: string; name: string; cell: string; effect: string; children?: React.ReactNode; height?: number}> = ({at, color, soft, name, cell, effect, children, height}) => (
	<Appear at={at}>
		<div style={{border: `5px solid ${color}`, background: soft, borderRadius: 26, padding: '20px 28px', height, boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'baseline', gap: 18}}>
				<span style={{fontSize: 46, fontWeight: 900, color}}>{name}</span>
				<span style={{fontSize: 28, fontWeight: 800, color: C.muted}}>{cell}</span>
				<span style={{marginLeft: 'auto', fontSize: 36, fontWeight: 900, color}}>{effect}</span>
			</div>
			{children && <div style={{fontSize: 29, fontWeight: 600, lineHeight: 1.6, marginTop: 10}}>{children}</div>}
		</div>
	</Appear>
);

export const Hormones: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">胰岛素与胰高血糖素</Header>
		<div style={{position: 'absolute', left: 90, top: 180, width: 760}}>
			<Card at={hm1.from} color={C.green} soft={C.greenSoft} name="胰岛素" cell="胰岛B细胞" effect="↓ 降血糖" height={460}>
				<Appear at={hm2.from} dy={0}>
					促进：血糖进入组织细胞<Hl c={C.green}>氧化分解</Hl>、合成糖原、转化为甘油三酯
				</Appear>
				<Appear at={hm2.from + 60} dy={0} style={{marginTop: 10}}>
					抑制：肝糖原分解、非糖物质转化为葡萄糖
				</Appear>
				<Appear at={hm1.from + 30} dy={0} style={{marginTop: 10, color: C.green, fontWeight: 900}}>
					唯一能降低血糖的激素
				</Appear>
			</Card>
		</div>
		<div style={{position: 'absolute', left: 1070, right: 90, top: 180, display: 'flex', flexDirection: 'column', gap: 24}}>
			<Card at={hm3.from} color={C.red} soft={C.redSoft} name="胰高血糖素" cell="胰岛A细胞" effect="↑ 升血糖">
				促进<Hl>肝糖原分解</Hl>、<Hl>非糖物质转化</Hl>
			</Card>
			<Card at={hm4.from} color={C.orange} soft={C.orangeSoft} name="肾上腺素" cell="肾上腺髓质" effect="↑ 升血糖" />
		</div>
		<Appear at={hm5.from} dy={0} style={{position: 'absolute', left: 860, top: 330, width: 200, textAlign: 'center'}}>
			<div style={{background: C.red, color: '#fff', fontSize: 30, fontWeight: 900, borderRadius: 12, padding: '8px 0'}}>⇄ 相抗衡</div>
		</Appear>
		<Appear at={hm5.from + 30} dy={0} style={{position: 'absolute', left: 1680, top: 330, width: 130, textAlign: 'center'}}>
			<div style={{background: C.orange, color: '#fff', fontSize: 30, fontWeight: 900, borderRadius: 12, padding: '8px 0'}}>协同</div>
		</Appear>
		<Appear at={hm5.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="考法" style={{fontSize: 30}}>
				胰岛素 ⇄ 胰高血糖素：<Hl>相抗衡</Hl>；胰高血糖素 + 肾上腺素：<Hl c={C.orange}>协同</Hl>升血糖
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
