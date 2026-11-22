import React from 'react';
import type {T} from '../timeline';
import {Compare} from './Compare';
import {Farm} from './Farm';
import {Intro} from './Intro';
import {Judge} from './Judge';
import {Kinds} from './Kinds';
import {Process} from './Process';
import {Review} from './Review';
import {Roles} from './Roles';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['kinds', Kinds],
	['judge', Judge],
	['process', Process],
	['roles', Roles],
	['farm', Farm],
	['compare', Compare],
	['review', Review],
];
