import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Principle} from './Principle';
import {Device} from './Device';
import {Steps} from './Steps';
import {Speed} from './Speed';
import {Data} from './Data';
import {Track} from './Track';
import {Error} from './Error';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['principle', Principle],
	['device', Device],
	['steps', Steps],
	['speed', Speed],
	['data', Data],
	['track', Track],
	['error', Error],
	['review', Review],
];
