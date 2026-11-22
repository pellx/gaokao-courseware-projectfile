import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.transport;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

const c = (s: string, color: string) => <span style={{color, fontWeight: 800}}>{s}</span>;

export const Transport: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">生长素的运输</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['类型', '部位', '方向 / 方式']}
				cols="1fr 1.5fr 2.2fr"
				at={tp1.from}
				fontSize={31}
				rowHeight={86}
				rows={[
					{cells: [c('极性运输', C.red), '胚芽鞘、芽、幼叶、幼根', '形态学上端 → 形态学下端；主动运输'], at: tp2.from},
					{cells: [c('非极性运输', C.orange), '成熟组织', '通过输导组织'], at: tp3.from},
					{cells: [c('横向运输', C.green), '尖端等部位', '单侧光、重力等单向刺激引起'], at: tp4.from},
				]}
			/>
		</div>
		<Appear at={tp5.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '14px 24px'}}>
				极性运输方向由<Hl>形态学上下端</Hl>决定，与重力无关
				<br />
				<Hl c={C.green}>考法</Hl>：缺氧、加呼吸抑制剂 → 极性运输<Hl c={C.orange}>受抑制</Hl>（主动运输耗能）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
