import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.memory;
const {mm1, mm2, mm3, mm4, mm5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Bracket: React.FC<{at: number; width: number; label: string; color: string}> = ({at, width, label, color}) => (
	<Appear at={at} dy={0} style={{width, textAlign: 'center'}}>
		<div style={{height: 22, borderLeft: `5px solid ${color}`, borderRight: `5px solid ${color}`, borderBottom: `5px solid ${color}`, borderRadius: '0 0 12px 12px'}} />
		<div style={{fontSize: 34, fontWeight: 900, color, marginTop: 8}}>{label}</div>
	</Appear>
);

const BOX = 250;
const ARROWS: [string, number][] = [
	['注意', 110],
	['反复运用、强化', 210],
	['长年累月运用', 190],
];

export const Memory: React.FC = () => {
	const STAGES: [string, string, number][] = [
		['感觉性记忆', C.brown, mm2.from],
		['第一级记忆', C.orange, mm3.from],
		['第二级记忆', C.green, at(mm3.from, mm3.to, 0.55)],
		['第三级记忆', C.red, mm4.from],
	];
	return (
	<Scene duration={t.duration}>
		<Header tag="考点三">学习与记忆的四个阶段</Header>
		<Appear at={mm1.from} style={{position: 'absolute', left: 90, top: 185, fontSize: 32, fontWeight: 800}}>
			外界信息 → 感觉器官 → 大脑
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 300}}>
			<div style={{display: 'flex', alignItems: 'center'}}>
				{STAGES.map(([label, color, cue], i) => (
					<React.Fragment key={label}>
						{i > 0 && (
							<Appear at={cue} dy={0} style={{width: ARROWS[i - 1][1], textAlign: 'center', color: C.muted, fontWeight: 700}}>
								<div style={{fontSize: 25}}>{ARROWS[i - 1][0]}</div>
								<div style={{fontSize: 42, lineHeight: 1}}>→</div>
							</Appear>
						)}
						<Appear at={cue} dx={-16} dy={0}>
							<div style={{width: BOX, boxSizing: 'border-box', textAlign: 'center', border: `4px solid ${color}`, color, borderRadius: 16, padding: '14px 0', fontSize: 36, fontWeight: 900, background: '#fff'}}>{label}</div>
						</Appear>
					</React.Fragment>
				))}
			</div>
			<div style={{display: 'flex', marginTop: 14}}>
				<Bracket at={mm5.from} width={BOX * 2 + ARROWS[0][1]} label="短时记忆" color={C.orange} />
				<div style={{width: ARROWS[1][1]}} />
				<Bracket at={at(mm5.from, mm5.to, 0.5)} width={BOX * 2 + ARROWS[2][1]} label="长时记忆" color={C.red} />
			</div>
		</div>
		<Appear at={at(mm2.from, mm2.to, 0.5)} style={{position: 'absolute', left: 90, top: 560, fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
			感觉性记忆：保持时间很短，大部分迅速消退
			<Appear at={at(mm4.from, mm4.to, 0.5)} dy={0}>
				第三级记忆：可保持终生（如自己的名字）
			</Appear>
		</Appear>
		<Appear at={mm5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				感觉性记忆 + 第一级记忆 = <Hl c={C.orange}>短时记忆</Hl>；第二级 + 第三级记忆 = <Hl>长时记忆</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
	);
};
