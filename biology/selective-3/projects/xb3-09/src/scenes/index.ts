import React from 'react';
import type {T} from '../timeline';
import {Apply} from './Apply';
import {Concept} from './Concept';
import {Differ} from './Differ';
import {Genetics} from './Genetics';
import {Intro} from './Intro';
import {Mii} from './Mii';
import {Process} from './Process';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['process', Process],
	['mii', Mii],
	['genetics', Genetics],
	['apply', Apply],
	['differ', Differ],
	['review', Review],
];
