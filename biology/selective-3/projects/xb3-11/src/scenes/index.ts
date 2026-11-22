import React from 'react';
import type {T} from '../timeline';
import {Basis} from './Basis';
import {Chart} from './Chart';
import {Intro} from './Intro';
import {Ivf} from './Ivf';
import {Meaning} from './Meaning';
import {Review} from './Review';
import {Split} from './Split';
import {Steps} from './Steps';
import {Transfer} from './Transfer';
import {Versus} from './Versus';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['ivf', Ivf],
	['transfer', Transfer],
	['steps', Steps],
	['basis', Basis],
	['meaning', Meaning],
	['split', Split],
	['versus', Versus],
	['chart', Chart],
	['review', Review],
];
