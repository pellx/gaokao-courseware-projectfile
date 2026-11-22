import React from 'react';
import type {T} from '../timeline';
import {Cases} from './Cases';
import {Concept} from './Concept';
import {Intro} from './Intro';
import {Judge} from './Judge';
import {Cycle, Harmony, Self, Whole} from './Principles';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['self', Self],
	['cycle', Cycle],
	['harmony', Harmony],
	['whole', Whole],
	['judge', Judge],
	['cases', Cases],
	['review', Review],
];
