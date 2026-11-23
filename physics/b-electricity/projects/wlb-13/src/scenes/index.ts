import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {What} from './What';
import {Dir} from './Dir';
import {Size} from './Size';
import {NoWork} from './NoWork';
import {Compare} from './Compare';
import {Tube} from './Tube';
import {Clear} from './Clear';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['what', What],
	['dir', Dir],
	['size', Size],
	['nowork', NoWork],
	['compare', Compare],
	['tube', Tube],
	['clear', Clear],
	['review', Review],
];
