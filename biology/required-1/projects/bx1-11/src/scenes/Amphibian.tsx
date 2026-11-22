import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.amphibian;
const {am1, am2, am3, am4, am5} = t.cue;

const Title: React.FC<{at: number; top: number; children: React.ReactNode}> = ({at, top, children}) => (
	<Appear at={at} dy={0} style={{position: 'absolute', left: 90, top, fontSize: 34, fontWeight: 900, color: C.red}}>
		{children}
	</Appear>
);

export const Amphibian: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">美西螈核移植与蝾螈受精卵横缢</Header>
		<Title at={am1.from} top={165}>美西螈核移植实验</Title>
		<Flow
			style={{left: 90, top: 225}}
			fontSize={31}
			rows={[
				[
					{label: '黑色美西螈胚胎细胞的核', color: C.text, at: am1.from},
					{label: '白色美西螈的去核卵细胞', at: am1.from + 30},
					{label: '全是黑色美西螈', color: C.red, at: am1.from + 70},
				],
			]}
			arrows={[[undefined, '移入', '发育']]}
		/>
		<Appear at={am2.from} style={{position: 'absolute', left: 90, top: 320, fontSize: 31, fontWeight: 800}}>
			→ 肤色遗传由<Hl>细胞核</Hl>控制
		</Appear>
		<Title at={am3.from} top={400}>蝾螈受精卵横缢实验</Title>
		<Flow
			style={{left: 90, top: 460}}
			fontSize={31}
			rows={[
				[
					{label: '有核的一半', color: C.green, at: am3.from},
					{label: '能分裂', color: C.green, at: am3.from + 20},
				],
				[
					{label: '无核的一半', color: C.muted, at: am3.from + 40},
					{label: '停止分裂', color: C.muted, at: am3.from + 50},
					{label: '挤入细胞核', color: C.orange, at: am3.from + 90},
					{label: '开始分裂', color: C.green, at: am3.from + 110},
				],
			]}
			rowGap={16}
		/>
		<Appear at={am4.from} style={{position: 'absolute', left: 1200, top: 480, width: 630, fontSize: 31, fontWeight: 800, lineHeight: 1.6}}>
			→ 细胞核控制着细胞的<Hl>分裂、分化</Hl>
		</Appear>
		<Tip at={am5.from} top={700} label="解题方法">
			后代性状<Hl>和谁的细胞核一致</Hl>，就由谁控制；有核与无核、去核与补核形成对照
		</Tip>
		<Narration t={t} />
	</Scene>
);
