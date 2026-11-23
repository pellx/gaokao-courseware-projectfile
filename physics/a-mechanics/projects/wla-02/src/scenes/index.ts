import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Vel} from './Vel';
import {Avg} from './Avg';
import {Rate} from './Rate';
import {Vt} from './Vt';
import {Acc} from './Acc';
import {Dir} from './Dir';
import {Slope} from './Slope';
import {Tell} from './Tell';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['vel', Vel],
	['avg', Avg],
	['rate', Rate],
	['vt', Vt],
	['acc', Acc],
	['dir', Dir],
	['slope', Slope],
	['tell', Tell],
	['review', Review],
];
