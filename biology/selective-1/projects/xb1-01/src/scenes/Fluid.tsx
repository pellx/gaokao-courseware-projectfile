import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fluid;
const {fl2, fl3, fl4, fl5} = t.cue;
const mid = (from: number, to: number) => Math.round((from + to) / 2);

export const Fluid: React.FC = () => {
	const split = useRamp(fl3.from + 10, 30);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">体液的组成</Header>
			<div style={{position: 'absolute', left: 110, top: 200}}>
				<Tree
					width={980}
					height={560}
					colWidth={360}
					boxWidth={250}
					boxHeight={96}
					fontSize={38}
					root={{
						label: '体液',
						color: C.text,
						at: fl2.from,
						children: [
							{label: '细胞内液', note: '约占 2/3', color: C.orange, at: fl3.from},
							{
								label: '细胞外液',
								note: '约占 1/3',
								color: C.green,
								at: mid(fl3.from, fl3.to),
								children: [
									{label: '血浆', color: C.red, at: fl4.from},
									{label: '组织液', color: C.orange, at: fl4.from + 12},
									{label: '淋巴液', color: C.green, at: fl4.from + 24},
								],
							},
						],
					}}
				/>
			</div>
			<Appear at={fl3.from} style={{position: 'absolute', left: 1180, right: 90, top: 210}}>
				<div style={{fontSize: 32, fontWeight: 800, marginBottom: 14}}>体液的比例</div>
				<div style={{display: 'flex', height: 86, borderRadius: 16, overflow: 'hidden', fontSize: 30, fontWeight: 800, color: '#fff'}}>
					<div style={{width: `${(2 / 3) * 100 * split}%`, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap'}}>细胞内液 2/3</div>
					<div style={{flex: 1, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap'}}>细胞外液 1/3</div>
				</div>
			</Appear>
			<Appear at={fl5.from} style={{position: 'absolute', left: 1180, right: 90, top: 400}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 34}}>
					<Hl>消化液、泪液、汗液、尿液</Hl>不属于体液。
					<br />
					它们在消化道、泪道、汗腺导管、膀胱等<Hl c={C.orange}>与外界相通</Hl>的管腔中，相当于“体外”。
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
