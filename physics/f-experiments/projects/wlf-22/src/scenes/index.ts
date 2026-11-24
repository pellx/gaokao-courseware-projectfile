import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Object} from './Object';
import {Tool} from './Tool';
import {Mass} from './Mass';
import {Temp} from './Temp';
import {Measure} from './Measure';
import {Data} from './Data';
import {Error} from './Error';
import {Law} from './Law';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['object', Object],
	['tool', Tool],
	['mass', Mass],
	['temp', Temp],
	['measure', Measure],
	['data', Data],
	['error', Error],
	['law', Law],
	['review', Review],
];
