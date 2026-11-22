import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.codon;
const {cd1, cd2, cd3} = t.cue;

export const Codon: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">启动子与起始密码子</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190}}>
			<Table
				head={['比较项目', '启动子 / 终止子', '起始密码子 / 终止密码子']}
				cols="1fr 1.6fr 1.6fr"
				at={cd1.from}
				fontSize={32}
				rowHeight={84}
				rows={[
					{cells: ['位置', <Hl>DNA 上</Hl>, <Hl c={C.green}>mRNA 上</Hl>], at: cd1.from},
					{cells: ['本质', '一段 DNA 序列', '三个相邻的碱基'], at: cd1.from + 25},
					{cells: ['控制', <><Hl>转录</Hl>的开始 / 结束</>, <><Hl c={C.green}>翻译</Hl>的开始 / 结束</>], at: cd2.from},
				]}
			/>
		</div>
		<Tip at={cd3.from} top={560} label="易错">
			启动子<Hl>不是</Hl>起始密码子，终止子<Hl>不是</Hl>终止密码子：一个看 DNA 和转录，一个看 mRNA 和翻译
		</Tip>
		<Narration t={t} />
	</Scene>
);
