import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Essence} from './Essence';
import {Write} from './Write';
import {Split} from './Split';
import {Meaning} from './Meaning';
import {Detect} from './Detect';
import {Salt} from './Salt';
import {Coexist} from './Coexist';
import {Hidden} from './Hidden';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['essence', Essence],
	['write', Write],
	['split', Split],
	['meaning', Meaning],
	['detect', Detect],
	['salt', Salt],
	['coexist', Coexist],
	['hidden', Hidden],
	['review', Review],
];
