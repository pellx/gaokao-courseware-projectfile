import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Sys} from './Sys';
import {Der} from './Der';
import {Law} from './Law';
import {Approx} from './Approx';
import {Expr} from './Expr';
import {Mech} from './Mech';
import {Newton} from './Newton';
import {Univ} from './Univ';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['sys', Sys],
	['der', Der],
	['law', Law],
	['approx', Approx],
	['expr', Expr],
	['mech', Mech],
	['newton', Newton],
	['univ', Univ],
	['review', Review],
];
