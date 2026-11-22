import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Hess} from './Hess';
import {Algebra} from './Algebra';
import {Coef} from './Coef';
import {Write} from './Write';
import {Compare} from './Compare';
import {Summary} from './Summary';
import {Energy} from './Energy';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['hess', Hess],
	['algebra', Algebra],
	['coef', Coef],
	['write', Write],
	['compare', Compare],
	['sum', Summary],
	['energy', Energy],
	['review', Review],
];
