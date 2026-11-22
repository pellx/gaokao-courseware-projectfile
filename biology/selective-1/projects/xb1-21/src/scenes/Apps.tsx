import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apps;
const {ap1, ap2, ap3, ap4, ap5} = t.cue;

const o = (s: string) => <span style={{color: C.orange, fontWeight: 800}}>{s}</span>;

export const Apps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">植物生长调节剂的应用实例</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['调节剂', '应用', '模拟的激素']}
				cols="1fr 2.4fr 1.2fr"
				at={ap1.from}
				fontSize={31}
				rowHeight={84}
				rows={[
					{cells: [o('乙烯利'), '催熟凤梨、香蕉等（释放乙烯）', '乙烯'], at: ap2.from},
					{cells: [o('赤霉素'), '大麦无须发芽就产生α-淀粉酶 → 啤酒生产', '赤霉素'], at: ap3.from},
					{cells: [o('膨大剂'), '水果长势加快、个头变大（口感、储存受影响）', '细胞分裂素类'], at: ap4.from},
					{cells: [o('萘乙酸、2,4-D'), '促进插条生根；高浓度除草', '生长素'], at: ap5.from},
				]}
			/>
		</div>
		<Appear at={ap5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="考法" style={{fontSize: 30}}>
				常问模拟了哪种激素：乙烯利 → <Hl>乙烯</Hl>；膨大剂 → <Hl>细胞分裂素类</Hl>；萘乙酸、2,4-D → <Hl>生长素</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
