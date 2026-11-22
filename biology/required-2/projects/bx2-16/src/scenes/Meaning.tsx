import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {me1, me2, me3, me4} = t.cue;

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">基因突变的意义与遗传</Header>
		<Rows
			style={{left: 90, right: 90, top: 180}}
			fontSize={32}
			gap={20}
			items={[
				{at: me1.from, color: C.red, title: '意义', children: <>产生<Hl>新基因</Hl>的途径，生物变异的<Hl>根本来源</Hl>，为进化提供原材料</>},
				{at: me2.from, color: C.orange, title: '利害', children: <>可能有害，也可能有利，还有些是<Hl c={C.orange}>中性</Hl>的</>},
				{at: me3.from, color: C.green, title: '遗传', children: <><Hl c={C.green}>生殖细胞</Hl>突变可遗传；体细胞突变一般不能通过有性生殖遗传（植物可无性繁殖传递）</>},
			]}
		/>
		<Tip at={me4.from} top={590} label="考法" fontSize={34}>
			基因突变<Hl>一定改变基因</Hl>，但<Hl>不一定改变性状</Hl>（密码子简并；AA → Aa 隐性突变）
		</Tip>
		<Narration t={t} />
	</Scene>
);
