import React from 'react';
import type {T} from '../timeline';
import {Efficiency} from './Efficiency';
import {Intro} from './Intro';
import {Meaning1} from './Meaning1';
import {Meaning2} from './Meaning2';
import {MinMax} from './MinMax';
import {Model} from './Model';
import {Ratio} from './Ratio';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['efficiency', Efficiency],
	['minmax', MinMax],
	['ratio', Ratio],
	['model', Model],
	['meaning1', Meaning1],
	['meaning2', Meaning2],
	['review', Review],
];
