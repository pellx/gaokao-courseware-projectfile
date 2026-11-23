import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Record} from './Record';
import {Vertical} from './Vertical';
import {Device} from './Device';
import {Steps} from './Steps';
import {Horizontal} from './Horizontal';
import {Error} from './Error';
import {End} from './End';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['record', Record],
	['vertical', Vertical],
	['device', Device],
	['steps', Steps],
	['horizontal', Horizontal],
	['error', Error],
	['end', End],
	['review', Review],
];
