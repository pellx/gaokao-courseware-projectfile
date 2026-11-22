import React from 'react';
import type {T} from '../timeline';
import {Apply} from './Apply';
import {Calc} from './Calc';
import {Compare} from './Compare';
import {Factor} from './Factor';
import {Ferment} from './Ferment';
import {Intro} from './Intro';
import {Judge} from './Judge';
import {Process} from './Process';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['process', Process],
	['ferment', Ferment],
	['compare', Compare],
	['judge', Judge],
	['calc', Calc],
	['factor', Factor],
	['apply', Apply],
	['review', Review],
];
