import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Humoral} from '../components/Humoral';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.plasma;
const {pl1, pl2, pl3, pl4, pl5, pl6} = t.cue;

export const Plasma: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">浆细胞与记忆B细胞</Header>
		<div style={{position: 'absolute', left: 90, top: 175}}>
			<Humoral at={[0, 0, 0, 0, 0, pl1.from, pl2.from, pl4.from, pl5.from]} />
		</div>
		<Appear at={pl3.from} style={{position: 'absolute', left: 1450, top: 600, fontSize: 28, fontWeight: 800, color: C.green, lineHeight: 1.4}}>
			抑制病原体的增殖
			<br />
			和对人体细胞的黏附
		</Appear>
		<Appear at={pl6.from} style={{position: 'absolute', left: 90, right: 90, top: 745}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '12px 24px'}}>
				抗体只能由<Hl>浆细胞</Hl>产生；一个浆细胞只产生<Hl>一种</Hl>抗体
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
