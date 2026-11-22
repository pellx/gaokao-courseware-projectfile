import React from 'react';
import type {T} from '../timeline';
import {Balance} from './Balance';
import {Intro} from './Intro';
import {Judge} from './Judge';
import {Levels} from './Levels';
import {Loss} from './Loss';
import {Protect} from './Protect';
import {Review} from './Review';
import {Values} from './Values';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['levels', Levels],
	['values', Values],
	['judge', Judge],
	['loss', Loss],
	['protect', Protect],
	['balance', Balance],
	['review', Review],
];
