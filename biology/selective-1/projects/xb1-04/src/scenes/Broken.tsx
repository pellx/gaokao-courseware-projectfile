import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.broken;
const {bk1, bk2, bk3, bk4, bk5} = t.cue;

const yes = (s: string) => <span style={{color: C.green, fontWeight: 900}}>✓ {s}</span>;
const no = (s: string) => <span style={{color: C.red, fontWeight: 900}}>✗ {s}</span>;

export const Broken: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点四">反射弧受损的分析</Header>
			<div style={{position: 'absolute', left: 90, top: 180, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Chain
					fontSize={32}
					steps={[
						{label: '兴奋', at: bk1.from},
						{label: '脊髓', at: bk1.from + 10},
						{label: '大脑皮层', color: C.orange, at: bk1.from + 20},
						{label: '形成感觉', color: C.orange, at: bk1.from + 30},
					]}
				/>
				<Chain
					fontSize={32}
					steps={[
						{label: '兴奋', at: bk1.from + 50},
						{label: '传出神经', at: bk1.from + 60},
						{label: '效应器', color: C.green, at: bk1.from + 70},
						{label: '作出反应', color: C.green, at: bk1.from + 80},
					]}
				/>
			</div>
			<div style={{position: 'absolute', left: 90, right: 90, top: 400}}>
				<Table
					head={['受损部位', '感觉', '反应']}
					cols="2.2fr 1fr 1fr"
					at={bk2.from - 10}
					fontSize={34}
					rowHeight={80}
					focus={frame >= bk5.from}
					rows={[
						{cells: ['感受器、传入神经或神经中枢', no('无'), no('无')], at: bk2.from},
						{cells: ['传出神经或效应器', yes('有'), no('无')], at: bk3.from, key: true},
						{cells: ['脊髓中通向大脑的传导通路（如高位截瘫）', no('无'), yes('有')], at: bk4.from, key: true},
					]}
				/>
			</div>
			<Appear at={bk5.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
				<Callout label="考法" style={{fontSize: 31}}>
					“有感觉、无反应” → <Hl>传出神经或效应器</Hl>受损；“无感觉、有反应” → <Hl c={C.orange}>通向大脑的传导通路</Hl>受损
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
