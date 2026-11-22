import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Narration, Scene, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ops;
const {op1, op2, op3, op4, op5} = t.cue;

const up = <span style={{color: C.red, fontWeight: 900, fontSize: 40}}>↑</span>;
const down = <span style={{color: C.green, fontWeight: 900, fontSize: 40}}>↓</span>;

export const Ops: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点六">切除腺体、注射激素后的变化</Header>
			<div style={{position: 'absolute', left: 90, right: 90, top: 190}}>
				<Table
					head={['处理', 'TRH', 'TSH', '甲状腺激素']}
					cols="1.6fr 1fr 1fr 1fr"
					at={op1.from}
					fontSize={32}
					rowHeight={92}
					focus={frame >= op5.from}
					rows={[
						{cells: ['切除甲状腺', up, up, down], at: op2.from, key: true},
						{cells: ['注射甲状腺激素', down, down, up], at: op3.from, key: true},
						{cells: ['切除垂体', up, down, down], at: op4.from, key: true},
					]}
				/>
			</div>
			<Appear at={op5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
				<Callout label="解题方法" style={{fontSize: 30}}>
					先找<Hl>直接改变</Hl>的激素 → <Hl c={C.orange}>顺着分级调节</Hl>往下推，<Hl c={C.green}>逆着负反馈</Hl>往上推
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
