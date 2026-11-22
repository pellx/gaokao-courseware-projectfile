import React from 'react';
import type {T} from '../timeline';
import {Compare} from './Compare';
import {Concept} from './Concept';
import {Human} from './Human';
import {Intro} from './Intro';
import {Primary} from './Primary';
import {Restore} from './Restore';
import {Review} from './Review';
import {Secondary} from './Secondary';
import {Trend} from './Trend';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['primary', Primary],
	['secondary', Secondary],
	['compare', Compare],
	['trend', Trend],
	['human', Human],
	['restore', Restore],
	['review', Review],
];
