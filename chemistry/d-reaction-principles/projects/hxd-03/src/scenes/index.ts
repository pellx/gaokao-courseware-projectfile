import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Rate} from './Rate';
import {Compare} from './Compare';
import {Conc} from './Conc';
import {Inert} from './Inert';
import {Temp} from './Temp';
import {Other} from './Other';
import {Ctrl} from './Ctrl';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['rate', Rate],
	['cmp', Compare],
	['conc', Conc],
	['inert', Inert],
	['temp', Temp],
	['other', Other],
	['ctrl', Ctrl],
	['review', Review],
];
