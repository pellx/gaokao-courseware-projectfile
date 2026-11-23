import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Principle} from './Principle';
import {Device} from './Device';
import {Record} from './Record';
import {Steps} from './Steps';
import {Data} from './Data';
import {Concept} from './Concept';
import {Error} from './Error';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['principle', Principle],
	['device', Device],
	['record', Record],
	['steps', Steps],
	['data', Data],
	['concept', Concept],
	['error', Error],
	['review', Review],
];
