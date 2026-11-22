import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Heat} from './Heat';
import {Precise} from './Precise';
import {Leak} from './Leak';
import {Light} from './Light';
import {Special} from './Special';
import {Safety} from './Safety';
import {Accident} from './Accident';
import {Operation} from './Operation';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['heat', Heat],
	['precise', Precise],
	['leak', Leak],
	['light', Light],
	['special', Special],
	['safety', Safety],
	['accident', Accident],
	['operation', Operation],
	['review', Review],
];
