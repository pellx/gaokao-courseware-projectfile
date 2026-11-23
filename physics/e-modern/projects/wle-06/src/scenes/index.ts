import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Spectrum} from './Spectrum';
import {Balmer} from './Balmer';
import {Classic} from './Classic';
import {Orbit} from './Orbit';
import {Transition} from './Transition';
import {Levels} from './Levels';
import {Ionize} from './Ionize';
import {Compare} from './Compare';
import {Limit} from './Limit';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['spectrum', Spectrum],
	['balmer', Balmer],
	['classic', Classic],
	['orbit', Orbit],
	['transition', Transition],
	['levels', Levels],
	['ionize', Ionize],
	['compare', Compare],
	['limit', Limit],
	['review', Review],
];
