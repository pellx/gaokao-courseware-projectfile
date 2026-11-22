import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.relations;
const {rl1, rl2, rl3, rl4, rl5, rl6} = t.cue;

const b = (s: string, c: string) => <span style={{color: c, fontWeight: 800}}>{s}</span>;

export const Relations: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">五种种间关系</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				head={['关系', '特点', '实例']}
				cols="1.1fr 2.6fr 1.7fr"
				at={rl1.from}
				fontSize={28}
				rowHeight={78}
				rows={[
					{cells: [b('原始合作', C.orange), <span>双方受益，<Hl c={C.orange}>分开后各自能独立生活</Hl></span>, '海葵与寄居蟹'], at: rl2.from},
					{cells: [b('互利共生', C.green), <span>相互依存，<Hl c={C.green}>分开后至少一方不能独立生活</Hl></span>, '豆科植物与根瘤菌'], at: rl3.from},
					{cells: [b('种间竞争', C.red), '争夺相同的资源和空间', '大草履虫与双小核草履虫'], at: rl4.from},
					{cells: [b('捕食', C.red), '一种生物以另一种生物为食', '猞猁与雪兔'], at: rl4.from + 40},
					{cells: [b('寄生', C.brown), '从另一种生物体内或体表摄取养分', '蛔虫与人、噬菌体与细菌'], at: rl5.from},
				]}
			/>
		</div>
		<Appear at={rl6.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				原始合作 vs 互利共生：看<Hl>分开后能不能独立生活</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
