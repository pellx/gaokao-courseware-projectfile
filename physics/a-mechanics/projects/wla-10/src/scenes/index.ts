import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {State} from './State';
import {Cond} from './Cond';
import {Comp} from './Comp';
import {Three} from './Three';
import {Tri} from './Tri';
import {Multi} from './Multi';
import {Zero} from './Zero';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['state', State],
	['cond', Cond],
	['comp', Comp],
	['three', Three],
	['tri', Tri],
	['multi', Multi],
	['zero', Zero],
	['review', Review],
];
