import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Field} from './Field';
import {Eddy} from './Eddy';
import {Stop} from './Stop';
import {Damp} from './Damp';
import {Drive} from './Drive';
import {Mutual} from './Mutual';
import {Self} from './Self';
import {Coef} from './Coef';
import {Energy} from './Energy';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['field', Field],
	['eddy', Eddy],
	['stop', Stop],
	['damp', Damp],
	['drive', Drive],
	['mutual', Mutual],
	['self', Self],
	['coef', Coef],
	['energy', Energy],
	['review', Review],
];
