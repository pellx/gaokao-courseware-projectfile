import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hypo;
const {hy1, hy2, hy3, hy4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Hypo: React.FC = () => {
	const ROLES: [string, string, number][] = [
		['感受', '渗透压感受器', hy2.from],
		['传导', '把兴奋传到大脑皮层（产生渴觉）', at(hy2.from, hy2.to, 0.5)],
		['分泌', '抗利尿激素、多种促激素释放激素', hy3.from],
		['调节中枢', '体温、水平衡、血糖调节中枢', at(hy3.from, hy3.to, 0.5)],
	];
	return (
		<Scene duration={t.duration}>
			<Header tag="考点八">下丘脑的四大作用</Header>
			<Appear at={hy1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 34, fontWeight: 900}}>
				<Hl c={C.brown}>下丘脑</Hl>：神经调节与体液调节的枢纽
			</Appear>
			<div style={{position: 'absolute', left: 90, right: 90, top: 260, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
				{ROLES.map(([title, note, from], i) => (
					<Appear key={title} at={from}>
						<div style={{border: `5px solid ${C.brown}`, borderRadius: 22, padding: '18px 28px', background: '#fff', height: 150, boxSizing: 'border-box'}}>
							<div style={{fontSize: 42, fontWeight: 900, color: C.brown}}>
								{i + 1}. {title}
							</div>
							<div style={{fontSize: 29, fontWeight: 700, color: C.muted, marginTop: 6}}>{note}</div>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={hy4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
				<Callout label="考法" style={{fontSize: 30}}>
					问“下丘脑的作用”，从<Hl>感受、传导、分泌、调节</Hl>四个方面去找
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};
