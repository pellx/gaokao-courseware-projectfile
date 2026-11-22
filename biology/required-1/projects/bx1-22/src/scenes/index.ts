import React from 'react';
import type {T} from '../timeline';
import {Count} from './Count';
import {Cycle} from './Cycle';
import {Early} from './Early';
import {Interphase} from './Interphase';
import {Intro} from './Intro';
import {Late} from './Late';
import {Represent} from './Represent';
import {Review} from './Review';
import {Size} from './Size';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['size', Size],
	['cycle', Cycle],
	['represent', Represent],
	['interphase', Interphase],
	['early', Early],
	['late', Late],
	['count', Count],
	['review', Review],
];
