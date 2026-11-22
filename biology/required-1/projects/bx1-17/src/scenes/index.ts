import React from 'react';
import type {T} from '../timeline';
import {Contrast} from './Contrast';
import {Detect} from './Detect';
import {Device} from './Device';
import {Energy} from './Energy';
import {Intro} from './Intro';
import {Review} from './Review';
import {Stages} from './Stages';
import {Total} from './Total';
import {Traps} from './Traps';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['device', Device],
	['detect', Detect],
	['contrast', Contrast],
	['total', Total],
	['stages', Stages],
	['energy', Energy],
	['traps', Traps],
	['review', Review],
];
