import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Gravity} from './Gravity';
import {Accel} from './Accel';
import {Deflect} from './Deflect';
import {Split} from './Split';
import {Offset} from './Offset';
import {Build} from './Build';
import {Scope} from './Scope';
import {Energy} from './Energy';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['gravity', Gravity],
	['accel', Accel],
	['deflect', Deflect],
	['split', Split],
	['offset', Offset],
	['build', Build],
	['scope', Scope],
	['energy', Energy],
	['review', Review],
];
