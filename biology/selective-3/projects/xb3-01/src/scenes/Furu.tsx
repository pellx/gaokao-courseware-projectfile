import React from 'react';
import {Appear, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.furu;
const {fu1, fu2, fu3, fu4, fu5} = t.cue;

const row = (name: string, kind: string, type: string, use: string, at: number, key = false) => ({
	cells: [name, kind === '原核' ? <Hl>{kind}</Hl> : kind, type, use],
	at,
	key,
});

export const Furu: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">腐乳、酱等传统发酵食品</Header>
		<Appear at={fu1.from} style={{position: 'absolute', left: 90, top: 170, width: 800, fontSize: 31, fontWeight: 700, lineHeight: 1.5}}>
			酵母、曲霉、毛霉等多种微生物参与，主要是 <Hl>毛霉</Hl>
		</Appear>
		<Flow
			style={{left: 90, top: 260}}
			fontSize={32}
			arrows={[[undefined, '蛋白酶'], [undefined, '脂肪酶']]}
			rows={[
				[
					{label: '蛋白质', at: fu2.from},
					{label: '小分子的肽 + 氨基酸', color: C.orange, at: fu2.from + 10},
				],
				[
					{label: '脂肪', at: fu3.from},
					{label: '甘油 + 脂肪酸', color: C.orange, at: fu3.from + 10},
				],
			]}
		/>
		<Appear at={fu4.from} style={{position: 'absolute', left: 90, top: 470, width: 800}}>
			<Card style={{fontSize: 31, fontWeight: 700}}>
				毛霉：丝状<Hl c={C.orange}>真菌</Hl> · <Hl c={C.orange}>真核生物</Hl> · <Hl c={C.orange}>异养需氧型</Hl>
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 960, right: 90, top: 250}}>
			<Table
				head={['菌种', '类型', '代谢类型', '用于']}
				cols="1.1fr 0.8fr 1.4fr 0.8fr"
				at={fu4.from}
				fontSize={28}
				rowHeight={62}
				rows={[
					row('毛霉', '真核', '异养需氧', '腐乳', fu4.from),
					row('乳酸菌', '原核', '异养厌氧', '泡菜', fu5.from),
					row('酵母菌', '真核', '异养兼性厌氧', '果酒', fu5.from + 12),
					row('醋酸菌', '原核', '异养需氧', '果醋', fu5.from + 24),
				]}
			/>
		</div>
		<Tip at={fu5.from} top={630} label="解题方法">
			<Hl>乳酸菌、醋酸菌是原核生物</Hl>，酵母菌、毛霉是真核生物；只有乳酸菌严格厌氧，酵母菌兼性厌氧
		</Tip>
		<Narration t={t} />
	</Scene>
);
