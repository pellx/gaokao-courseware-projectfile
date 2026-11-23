import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Emf} from './Emf';
import {Law} from './Law';
import {Three} from './Three';
import {Cut} from './Cut';
import {Avg} from './Avg';
import {Motional} from './Motional';
import {Energy} from './Energy';
import {Back} from './Back';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['emf', Emf],
	['law', Law],
	['three', Three],
	['cut', Cut],
	['avg', Avg],
	['motional', Motional],
	['energy', Energy],
	['back', Back],
	['review', Review],
];
