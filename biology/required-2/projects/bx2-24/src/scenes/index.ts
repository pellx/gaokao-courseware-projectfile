import React from 'react';
import type {T} from '../timeline';
import {Concept} from './Concept';
import {Examples} from './Examples';
import {History} from './History';
import {Intro} from './Intro';
import {Levels} from './Levels';
import {Modern} from './Modern';
import {Review} from './Review';
import {Theory} from './Theory';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['examples', Examples],
	['levels', Levels],
	['history', History],
	['theory', Theory],
	['modern', Modern],
	['review', Review],
];
