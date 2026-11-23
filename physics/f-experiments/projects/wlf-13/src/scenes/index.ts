import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Principle} from './Principle';
import {Measure} from './Measure';
import {Device} from './Device';
import {Outer} from './Outer';
import {Control} from './Control';
import {Steps} from './Steps';
import {Data} from './Data';
import {Error} from './Error';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['principle', Principle],
	['measure', Measure],
	['device', Device],
	['outer', Outer],
	['control', Control],
	['steps', Steps],
	['data', Data],
	['error', Error],
	['review', Review],
];
