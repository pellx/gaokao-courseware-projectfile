import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {ct1, ct2, ct3, ct4, ct5, ct6} = t.cue;

const sp = (s: string, c: string) => <span style={{color: c, fontWeight: 900}}>{chem(s)}</span>;

export const Count: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">原子和离子中的数量关系</Header>
		<Appear at={ct1.from} style={{position: 'absolute', left: 90, right: 90, top: 168}}>
			<div style={{fontSize: 36, fontWeight: 800, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '14px 28px', textAlign: 'center'}}>
				原子：<Hl>核电荷数 = 质子数 = 核外电子数 = 原子序数</Hl>
			</div>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 278}}>
			<Table
				head={['微粒', '质子数', '电子数', '怎么算']}
				cols="1fr 1fr 1fr 3fr"
				at={ct2.from}
				fontSize={32}
				rowHeight={70}
				focus
				rows={[
					{cells: [sp('Na', C.text), <span>11</span>, <span>11</span>, '原子：电子数 = 质子数'], at: ct2.from},
					{cells: [sp('Na^+', C.red), <span>11</span>, <Hl>10</Hl>, <span>阳离子：电子数 = Z <Hl>−</Hl> 电荷数 = 11 − 1</span>], at: ct3.from, key: true},
					{cells: [sp('S^2-', C.green), <span>16</span>, <Hl c={C.green}>18</Hl>, <span>阴离子：电子数 = Z <Hl c={C.green}>+</Hl> 电荷数 = 16 + 2</span>], at: ct4.from, key: true},
					{cells: [sp('OH^-', C.orange), '8 + 1 = 9', <Hl c={C.orange}>10</Hl>, '先加各原子质子数，再按电荷加 1 个电子'], at: ct5.from, key: true},
				]}
			/>
		</div>
		<Appear at={ct2.from} style={{position: 'absolute', left: 90, right: 90, top: 645, fontSize: 30, fontWeight: 700, color: C.muted}}>
			原子 → 离子：只有<Hl c={C.orange}>电子数</Hl>改变，质子数、中子数都不变
		</Appear>
		<Appear at={ct6.from} style={{position: 'absolute', left: 90, right: 90, top: 715}}>
			<Callout label="考法" color={C.orange} soft={C.orangeSoft} style={{fontSize: 31, padding: '16px 26px'}}>
				判断两种微粒的质子数、电子数是否相同。<Hl>易错</Hl>：电荷只改变电子数，<Hl>质子数不随电荷变</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
