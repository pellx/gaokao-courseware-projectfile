import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Dir} from './Dir';
import {Clausius} from './Clausius';
import {Kelvin} from './Kelvin';
import {Second} from './Second';
import {Entropy} from './Entropy';
import {Dissipate} from './Dissipate';
import {Kinds} from './Kinds';
import {Use} from './Use';
import {Env} from './Env';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['dir', Dir],
	['clausius', Clausius],
	['kelvin', Kelvin],
	['second', Second],
	['entropy', Entropy],
	['dissipate', Dissipate],
	['kinds', Kinds],
	['use', Use],
	['env', Env],
	['review', Review],
];
