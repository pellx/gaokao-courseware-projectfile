import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.griffith;
const {gr1, gr2, gr3, gr4, gr5} = t.cue;

export const Griffith: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">格里菲思的体内转化实验</Header>
		<Def at={gr1.from} style={{left: 90, right: 90, top: 165}} fontSize={30}>
			<Hl>S 型</Hl>：有荚膜、菌落光滑、有致病性　　<Hl c={C.green}>R 型</Hl>：无荚膜、菌落粗糙、无致病性
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 265}}>
			<Table
				at={gr2.from}
				cols="1fr 260px 1fr"
				fontSize={30}
				rowHeight={66}
				head={['注射到小鼠体内', '小鼠', '分离结果']}
				rows={[
					{at: gr2.from, cells: ['R 型活菌', '不死亡', '—']},
					{at: gr2.from + 40, cells: ['S 型活菌', <Hl>死亡</Hl>, 'S 型活菌']},
					{at: gr2.from + 80, cells: ['加热致死的 S 型菌', '不死亡', '—']},
					{at: gr3.from, key: true, cells: ['R 型活菌 ＋ 加热致死的 S 型菌', <Hl>死亡</Hl>, <Hl>S 型活菌</Hl>]},
				]}
			/>
		</div>
		<Def at={gr4.from} style={{left: 90, right: 90, top: 610}} color={C.red} soft={C.redSoft} fontSize={30}>
			结论：加热致死的 S 型菌中含有使 R 型菌转化为 S 型菌的<Hl>转化因子</Hl>
		</Def>
		<Tip at={gr5.from} top={720} label="易错" fontSize={31}>
			格里菲思<Hl>没有证明 DNA 是遗传物质</Hl>；转化出的 S 型菌后代仍是 S 型，转化是<Hl>可遗传的</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);
