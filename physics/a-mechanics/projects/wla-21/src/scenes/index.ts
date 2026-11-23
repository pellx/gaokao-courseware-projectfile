import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Two} from './Two';
import {Formula} from './Formula';
import {Sign} from './Sign';
import {Total} from './Total';
import {Power} from './Power';
import {Pfv} from './Pfv';
import {Gear} from './Gear';
import {Friction} from './Friction';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['two', Two],
	['formula', Formula],
	['sign', Sign],
	['total', Total],
	['power', Power],
	['pfv', Pfv],
	['gear', Gear],
	['friction', Friction],
	['review', Review],
];
