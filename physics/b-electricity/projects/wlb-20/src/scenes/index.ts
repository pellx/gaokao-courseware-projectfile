import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Ac} from './Ac';
import {Gen} from './Gen';
import {Neutral} from './Neutral';
import {Sine} from './Sine';
import {Dynamo} from './Dynamo';
import {Period} from './Period';
import {Rms} from './Rms';
import {Use} from './Use';
import {Lc} from './Lc';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['ac', Ac],
	['gen', Gen],
	['neutral', Neutral],
	['sine', Sine],
	['dynamo', Dynamo],
	['period', Period],
	['rms', Rms],
	['use', Use],
	['lc', Lc],
	['review', Review],
];
