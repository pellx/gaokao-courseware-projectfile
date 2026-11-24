import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Principle} from './Principle';
import {Device} from './Device';
import {Steps} from './Steps';
import {Data} from './Data';
import {Axis} from './Axis';
import {Error} from './Error';
import {Other} from './Other';
import {Conclusion} from './Conclusion';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['principle', Principle],
	['device', Device],
	['steps', Steps],
	['data', Data],
	['axis', Axis],
	['error', Error],
	['other', Other],
	['conclusion', Conclusion],
	['review', Review],
];
