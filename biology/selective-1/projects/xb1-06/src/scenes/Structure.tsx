import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene, useRamp} from '../components/ui';
import {Synapse} from '../components/Synapse';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.structure;
const {sy1, sy2, sy3, sy4, sy5} = t.cue;

const Type: React.FC<{at: number; title: string; color: string; children: React.ReactNode}> = ({at, title, color, children}) => (
	<Appear at={at} dx={-20} dy={0} style={{flex: 1}}>
		<div style={{border: `4px solid ${color}`, borderRadius: 18, padding: '10px 16px', background: '#fff', textAlign: 'center'}}>
			<svg width={200} height={90} viewBox="0 0 200 90">{children}</svg>
			<div style={{fontSize: 28, fontWeight: 900, color}}>{title}</div>
		</div>
	</Appear>
);

export const Structure: React.FC = () => {
	const labels = useRamp(sy2.from, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">突触的结构</Header>
			<Appear at={sy1.from} style={{position: 'absolute', left: 60, top: 165}}>
				<Synapse labels={labels} />
			</Appear>
			<Appear at={sy3.from} style={{position: 'absolute', left: 1130, right: 90, top: 170, height: 420}}>
				<Photo src="images/heuser.jpg" caption="突触的电镜照片：小泡里装着递质" style={{width: '100%', height: '100%'}} pos="center 40%" />
			</Appear>
			<div style={{position: 'absolute', left: 1130, right: 90, top: 615, display: 'flex', gap: 20}}>
				<Type at={sy4.from} title="轴突—细胞体型" color={C.orange}>
					<line x1={10} y1={45} x2={110} y2={45} stroke={C.brown} strokeWidth={6} />
					<circle cx={118} cy={45} r={10} fill={C.orange} />
					<circle cx={165} cy={45} r={34} fill="#f6d7b0" stroke={C.brown} strokeWidth={4} />
				</Type>
				<Type at={sy4.from + 30} title="轴突—树突型" color={C.green}>
					<line x1={10} y1={45} x2={100} y2={45} stroke={C.brown} strokeWidth={6} />
					<circle cx={108} cy={45} r={10} fill={C.green} />
					<path d="M122,45 L190,45 M150,45 L180,15 M150,45 L180,78" stroke={C.brown} strokeWidth={6} fill="none" />
				</Type>
			</div>
			<Appear at={sy5.from} style={{position: 'absolute', left: 90, width: 1000, top: 780}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 28, padding: '12px 24px'}}>
					突触小体 ≠ 突触；突触 = <Hl c={C.orange}>前膜</Hl> + <Hl c={C.brown}>间隙</Hl> + <Hl c={C.green}>后膜</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
