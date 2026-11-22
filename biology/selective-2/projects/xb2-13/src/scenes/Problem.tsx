import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import type {SceneTimeline} from '../timeline';
import {C} from '../theme';

// One environmental problem per row: cause → harm → response.
export type Row = {name: string; cause: React.ReactNode; harm: React.ReactNode; fix?: React.ReactNode; at: number; fixAt?: number};

const ROW_H = 140;

export const Problem: React.FC<{t: SceneTimeline; tag: string; title: string; rows: Row[]; intro?: {at: number; text: React.ReactNode}; callout: {label: string; red?: boolean; at: number; body: React.ReactNode}}> = ({t, tag, title, rows, intro, callout}) => (
	<Scene duration={t.duration}>
		<Header tag={tag}>{title}</Header>
		{intro && (
			<Appear at={intro.at} style={{position: 'absolute', left: 90, right: 90, top: 170, fontSize: 30, fontWeight: 700}}>
				{intro.text}
			</Appear>
		)}
		<div style={{position: 'absolute', left: 90, right: 90, top: intro ? 230 : 185, display: 'flex', flexDirection: 'column', gap: 18}}>
			{rows.map((r) => (
				<Appear key={r.name} at={r.at} dx={-20} dy={0}>
					<div style={{display: 'flex', gap: 20, alignItems: 'stretch', fontSize: 31, fontWeight: 700, lineHeight: 1.45, minHeight: ROW_H}}>
						<div style={{width: 230, flexShrink: 0, border: `5px solid ${C.red}`, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 900, color: C.red, textAlign: 'center', padding: 10}}>{r.name}</div>
						<div style={{flex: 1, background: C.redSoft, borderRadius: 18, padding: '16px 22px'}}>
							<Hl>原因</Hl>：{r.cause}
						</div>
						<div style={{flex: 1, background: C.orangeSoft, borderRadius: 18, padding: '16px 22px'}}>
							<Hl c={C.orange}>危害</Hl>：{r.harm}
						</div>
						{r.fix && (
							<Appear at={r.fixAt ?? r.at} style={{flex: 1, display: 'flex'}}>
								<div style={{flex: 1, background: C.greenSoft, borderRadius: 18, padding: '16px 22px'}}>
									<Hl c={C.green}>对策</Hl>：{r.fix}
								</div>
							</Appear>
						)}
					</div>
				</Appear>
			))}
		</div>
		<Appear at={callout.at} style={{position: 'absolute', left: 90, right: 90, top: (intro ? 230 : 185) + rows.length * (ROW_H + 18) + 30}}>
			<Callout label={callout.label} color={callout.red ? C.red : C.green} soft={callout.red ? C.redSoft : C.greenSoft} style={{fontSize: 30}}>
				{callout.body}
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);
