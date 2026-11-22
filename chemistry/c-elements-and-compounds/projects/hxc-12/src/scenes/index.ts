import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Silicate} from './Silicate';
import {Si} from './Si';
import {Sio} from './Sio';
import {Ceramic} from './Ceramic';
import {Carbon} from './Carbon';
import {Judge} from './Judge';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['silicate', Silicate],
	['si', Si],
	['sio2', Sio],
	['ceramic', Ceramic],
	['carbon', Carbon],
	['judge', Judge],
	['review', Review],
];
