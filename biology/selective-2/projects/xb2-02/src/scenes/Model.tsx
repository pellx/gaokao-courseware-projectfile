import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.model;
const {md1, md2, md3, md4, md5} = t.cue;

const STEPS = ['观察研究对象，提出问题', '提出合理的假设', '用数学形式表达', '检验或修正'];

export const Model: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">建构种群增长模型的方法</Header>
		<Appear at={md1.from} style={{position: 'absolute', left: 90, top: 170, fontSize: 32, fontWeight: 700}}>
			<Hl>数学模型</Hl>：用来描述一个系统或它的性质的数学形式
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 245, width: 640, display: 'flex', flexDirection: 'column', gap: 18}}>
			{STEPS.map((s, i) => (
				<Appear key={s} at={md2.from + i * 22} dx={-20} dy={0}>
					<div style={{display: 'flex', alignItems: 'center', gap: 18, border: `4px solid ${i === 1 ? C.red : C.orange}`, borderRadius: 16, padding: '12px 20px', background: '#fff', fontSize: 32, fontWeight: 800}}>
						<span style={{background: i === 1 ? C.red : C.orange, color: '#fff', borderRadius: 30, width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28}}>{i + 1}</span>
						{s}
					</div>
				</Appear>
			))}
		</div>
		<Appear at={md3.from} style={{position: 'absolute', left: 800, top: 245, width: 1030}}>
			<Card style={{display: 'flex', alignItems: 'center', gap: 30, padding: '18px 30px'}}>
				<div style={{fontSize: 28, fontWeight: 700, lineHeight: 1.5, flex: 1}}>
					细菌每 20 min 分裂一次
					<br />
					<span style={{color: C.muted}}>假设：资源和空间无限</span>
				</div>
				<div style={{fontSize: 48, fontWeight: 900, color: C.red}}>
					N<sub style={{fontSize: '0.6em'}}>n</sub> = 2<sup style={{fontSize: '0.6em'}}>n</sup>
				</div>
			</Card>
		</Appear>
		<Appear at={md4.from} style={{position: 'absolute', left: 820, top: 400}}>
			<Plot id="md" w={560} h={270} xLabel="代数 n" yLabel="细菌数量" at={md4.from} fontSize={24} curves={[{pts: sample((x) => (Math.pow(2, x * 8) - 1) / 255), color: C.orange, at: md4.from}]} />
		</Appear>
		<Appear at={md4.from} style={{position: 'absolute', left: 1420, top: 440, width: 410, display: 'flex', flexDirection: 'column', gap: 18, fontSize: 30, fontWeight: 800}}>
			<div>公式：<Hl c={C.orange}>精确</Hl></div>
			<div>曲线：<Hl c={C.green}>直观</Hl></div>
		</Appear>
		<Appear at={md5.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="考法" style={{fontSize: 31}}>
				步骤排序；“资源和空间无限”属于<Hl>提出合理的假设</Hl>，不是观察或检验
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
