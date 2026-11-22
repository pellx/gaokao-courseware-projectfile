import React from 'react';
import type {T} from '../timeline';
import {Concept} from './Concept';
import {Essence} from './Essence';
import {Intro} from './Intro';
import {Meaning} from './Meaning';
import {Review} from './Review';
import {Stem} from './Stem';
import {Totipotency} from './Totipotency';
import {Traps} from './Traps';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['essence', Essence],
	['meaning', Meaning],
	['totipotency', Totipotency],
	['stem', Stem],
	['traps', Traps],
	['review', Review],
];
