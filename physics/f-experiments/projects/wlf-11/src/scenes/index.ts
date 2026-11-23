import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Principle} from './Principle';
import {Device} from './Device';
import {Length} from './Length';
import {Period} from './Period';
import {Count} from './Count';
import {Data} from './Data';
import {Error} from './Error';
import {End} from './End';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['principle', Principle],
	['device', Device],
	['length', Length],
	['period', Period],
	['count', Count],
	['data', Data],
	['error', Error],
	['end', End],
	['review', Review],
];
