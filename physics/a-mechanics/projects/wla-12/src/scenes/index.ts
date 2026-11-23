import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Second} from './Second';
import {Fma} from './Fma';
import {Vec} from './Vec';
import {Instant} from './Instant';
import {Define} from './Define';
import {Units} from './Units';
import {Si} from './Si';
import {Use} from './Use';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['second', Second],
	['fma', Fma],
	['vec', Vec],
	['instant', Instant],
	['define', Define],
	['units', Units],
	['si', Si],
	['use', Use],
	['review', Review],
];
