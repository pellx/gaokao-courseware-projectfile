import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Loop} from './Loop';
import {Force} from './Force';
import {Emf} from './Emf';
import {Ohm} from './Ohm';
import {Split} from './Split';
import {Load} from './Load';
import {Energy} from './Energy';
import {Graph} from './Graph';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['loop', Loop],
	['force', Force],
	['emf', Emf],
	['ohm', Ohm],
	['split', Split],
	['load', Load],
	['energy', Energy],
	['graph', Graph],
	['review', Review],
];
