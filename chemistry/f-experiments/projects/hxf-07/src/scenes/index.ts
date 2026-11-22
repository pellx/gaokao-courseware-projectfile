import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Three} from './Three';
import {Interfere} from './Interfere';
import {Fade} from './Fade';
import {Precip} from './Precip';
import {Variable} from './Variable';
import {Compare} from './Compare';
import {Other} from './Other';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['three', Three],
	['interfere', Interfere],
	['fade', Fade],
	['precip', Precip],
	['variable', Variable],
	['compare', Compare],
	['other', Other],
	['review', Review],
];
