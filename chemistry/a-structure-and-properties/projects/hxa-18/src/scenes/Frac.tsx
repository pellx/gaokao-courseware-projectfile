import React from 'react';
import {C} from '../theme';

// 分式：上下两行，中间横线。
export const Frac: React.FC<{n: React.ReactNode; d: React.ReactNode; c?: string}> = ({n, d, c = C.text}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 8px', color: c}}>
		<span style={{padding: '0 8px'}}>{n}</span>
		<span style={{alignSelf: 'stretch', height: 4, background: c, margin: '4px 0'}} />
		<span style={{padding: '0 8px'}}>{d}</span>
	</span>
);
export const Rt: React.FC<{children: React.ReactNode}> = ({children}) => (
	<span style={{whiteSpace: 'nowrap'}}>
		√<span style={{borderTop: '3px solid currentColor', paddingTop: 2}}>{children}</span>
	</span>
);
