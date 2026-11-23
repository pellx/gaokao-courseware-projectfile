import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Vib} from './Vib';
import {Osc} from './Osc';
import {Graph} from './Graph';
import {Shm} from './Shm';
import {Amp} from './Amp';
import {Indep} from './Indep';
import {Expr} from './Expr';
import {Phase} from './Phase';
import {Read} from './Read';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['vib', Vib],
	['osc', Osc],
	['graph', Graph],
	['shm', Shm],
	['amp', Amp],
	['indep', Indep],
	['expr', Expr],
	['phase', Phase],
	['read', Read],
	['review', Review],
];
