import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Separate} from './Separate';
import {Wash} from './Wash';
import {Ksp} from './Ksp';
import {Cycle} from './Cycle';
import {Yield} from './Yield';
import {Loss} from './Loss';
import {Summary} from './Summary';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['separate', Separate],
	['wash', Wash],
	['ksp', Ksp],
	['cycle', Cycle],
	['yield', Yield],
	['loss', Loss],
	['summary', Summary],
	['review', Review],
];
