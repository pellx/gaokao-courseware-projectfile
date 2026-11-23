import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Seek} from './Seek';
import {Mech} from './Mech';
import {Law} from './Law';
import {Derive} from './Derive';
import {Cond} from './Cond';
import {Measure} from './Measure';
import {Change} from './Change';
import {Convert} from './Convert';
import {Energy} from './Energy';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['seek', Seek],
	['me', Mech],
	['law', Law],
	['derive', Derive],
	['cond', Cond],
	['measure', Measure],
	['change', Change],
	['convert', Convert],
	['energy', Energy],
	['review', Review],
];
