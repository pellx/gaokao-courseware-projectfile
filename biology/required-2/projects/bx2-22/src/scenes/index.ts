import React from 'react';
import type {T} from '../timeline';
import {Antibio} from './Antibio';
import {Freq} from './Freq';
import {Hw} from './Hw';
import {Intro} from './Intro';
import {Mutation} from './Mutation';
import {Pool} from './Pool';
import {Review} from './Review';
import {Select} from './Select';
import {Xfreq} from './Xfreq';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['pool', Pool],
	['freq', Freq],
	['hw', Hw],
	['xfreq', Xfreq],
	['mutation', Mutation],
	['select', Select],
	['antibio', Antibio],
	['review', Review],
];
