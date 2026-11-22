import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Elec} from './Elec';
import {Cond} from './Cond';
import {Eqn} from './Eqn';
import {Weak} from './Weak';
import {Ability} from './Ability';
import {Curve} from './Curve';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['elec', Elec],
	['cond', Cond],
	['eqn', Eqn],
	['weak', Weak],
	['ability', Ability],
	['curve', Curve],
	['review', Review],
];
