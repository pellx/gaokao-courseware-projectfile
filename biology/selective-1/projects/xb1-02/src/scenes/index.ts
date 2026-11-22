import React from 'react';
import type {T} from '../timeline';
import {Concept} from './Concept';
import {Disorder} from './Disorder';
import {Experiment} from './Experiment';
import {Intro} from './Intro';
import {Meaning} from './Meaning';
import {Mechanism} from './Mechanism';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['experiment', Experiment],
	['concept', Concept],
	['mechanism', Mechanism],
	['disorder', Disorder],
	['meaning', Meaning],
	['review', Review],
];
