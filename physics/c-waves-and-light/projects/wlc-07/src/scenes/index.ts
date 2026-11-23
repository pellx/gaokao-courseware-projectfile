import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Osc} from './Osc';
import {Dis} from './Dis';
import {Chg} from './Chg';
import {Emo} from './Emo';
import {Sync} from './Sync';
import {Period} from './Period';
import {Damp} from './Damp';
import {Graph} from './Graph';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['osc', Osc],
	['dis', Dis],
	['chg', Chg],
	['emo', Emo],
	['sync', Sync],
	['period', Period],
	['damp', Damp],
	['graph', Graph],
	['review', Review],
];
