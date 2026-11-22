import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.error;
const {er1, er2, er3, er4} = t.cue;

export const ErrorScene: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">放射性误差分析</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={er1.from}
				cols="220px 360px 1fr"
				fontSize={32}
				rowHeight={100}
				head={['组别', '异常现象', '原因']}
				rows={[
					{at: er2.from, cells: ['^[32]P 组', '上清液放射性偏高', <>保温<Hl c={C.orange}>过短</Hl>：部分 DNA 未注入</>]},
					{at: er2.from + 90, cells: ['^[32]P 组', '上清液放射性偏高', <>保温<Hl>过长</Hl>：细菌裂解，子代噬菌体释放</>]},
					{at: er3.from, cells: ['^[35]S 组', '沉淀物放射性偏高', <><Hl>搅拌不充分</Hl>：外壳仍吸附在细菌表面</>]},
				]}
			/>
		</div>
		<Tip at={er4.from} top={620} label="解题方法" fontSize={34}>
			<sup>32</sup>P 组误差看<Hl>保温时间</Hl>，<sup>35</sup>S 组误差看<Hl>搅拌</Hl>；保温时间对 <sup>35</sup>S 组基本无影响
		</Tip>
		<Narration t={t} />
	</Scene>
);
