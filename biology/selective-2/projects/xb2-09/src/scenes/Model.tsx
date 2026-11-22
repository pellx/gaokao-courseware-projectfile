import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.model;
const {mo1, mo2, mo3, mo4, mo5} = t.cue;

export const Model: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">能量流动模型图中的字母关系</Header>
		<svg width={1740} height={460} viewBox="0 0 1740 460" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={mo1.from}>
				<Box x={150} y={200} w={250} h={100} label="摄入量 a" sub="第二营养级" color={C.orange} fill={C.orangeSoft} fontSize={34} />
			</G>
			<G at={mo2.from}>
				<Box x={540} y={200} w={230} h={90} label="同化量 b" color={C.green} fill={C.greenSoft} fontSize={36} />
				<Arrow x1={280} y1={200} x2={420} y2={200} color={C.green} marker="arrow-green" />
				<Box x={540} y={390} w={250} h={80} label="粪便量 c" color={C.brown} fontSize={32} />
				<Arrow x1={220} y1={255} x2={410} y2={375} color={C.brown} />
			</G>
			<G at={mo3.from}>
				<Box x={960} y={70} w={260} h={80} label="呼吸散失 d" color={C.red} fill={C.redSoft} fontSize={32} />
				<Arrow x1={660} y1={170} x2={825} y2={90} color={C.red} marker="arrow-red" />
				<Box x={980} y={270} w={400} h={80} label="生长、发育和繁殖 e" color={C.green} fontSize={30} />
				<Arrow x1={660} y1={225} x2={775} y2={260} color={C.green} marker="arrow-green" />
			</G>
			<G at={mo4.from}>
				<Box x={1530} y={130} w={330} h={76} label="下一营养级同化 f" color={C.orange} fontSize={28} />
				<Arrow x1={1185} y1={255} x2={1360} y2={150} color={C.orange} marker="arrow-orange" />
				<Box x={1530} y={270} w={330} h={76} label="流向分解者 g" color={C.brown} fontSize={28} />
				<Arrow x1={1185} y1={270} x2={1360} y2={270} color={C.brown} />
				<Box x={1530} y={400} w={330} h={70} label="未利用" color={C.muted} fontSize={28} />
				<Arrow x1={1185} y1={290} x2={1360} y2={390} color={C.muted} />
			</G>
		</svg>
		<div style={{position: 'absolute', left: 90, top: 640, display: 'flex', gap: 40, fontSize: 30, fontWeight: 900}}>
			<Appear at={mo2.from}><Hl c={C.orange}>a = b + c</Hl></Appear>
			<Appear at={mo3.from}><Hl c={C.green}>b = d + e</Hl></Appear>
			<Appear at={mo4.from}><Hl c={C.green}>e = f + g + 未利用</Hl></Appear>
			<Appear at={mo4.from + 40}><Hl>传递效率（二→三）= f ÷ b</Hl></Appear>
		</div>
		<Appear at={mo5.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				先找<Hl>同化量</Hl>，再往下拆；粪便量 c 属于<Hl>上一营养级</Hl>流向分解者的能量
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
