import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Form} from './Form';
import {Wave} from './Wave';
import {Carry} from './Carry';
import {Kind} from './Kind';
import {Graph} from './Graph';
import {Lam} from './Lam';
import {Decide} from './Decide';
import {Dir} from './Dir';
import {Vs} from './Vs';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['form', Form],
	['wave', Wave],
	['carry', Carry],
	['kind', Kind],
	['graph', Graph],
	['lam', Lam],
	['decide', Decide],
	['dir', Dir],
	['vs', Vs],
	['review', Review],
];
