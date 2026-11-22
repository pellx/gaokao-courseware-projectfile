import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Expr} from './Expr';
import {Equation} from './Equation';
import {Temp} from './Temp';
import {QK} from './QK';
import {Three} from './Three';
import {Conv} from './Conv';
import {Kp} from './Kp';
import {Equiv} from './Equiv';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['expr', Expr],
	['eq', Equation],
	['temp', Temp],
	['qk', QK],
	['three', Three],
	['conv', Conv],
	['kp', Kp],
	['equiv', Equiv],
	['review', Review],
];
