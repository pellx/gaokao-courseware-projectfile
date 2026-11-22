import React from 'react';
import type {T} from '../timeline';
import {Compare} from './Compare';
import {Concept} from './Concept';
import {Intro} from './Intro';
import {Pitfall} from './Pitfall';
import {Process} from './Process';
import {Review} from './Review';
import {Rna} from './Rna';
import {Types} from './Types';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['rna', Rna],
	['types', Types],
	['concept', Concept],
	['process', Process],
	['compare', Compare],
	['pitfall', Pitfall],
	['review', Review],
];
