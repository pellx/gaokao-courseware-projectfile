import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Skeleton} from './Skeleton';
import {Groupone} from './Groupone';
import {Grouptwo} from './Grouptwo';
import {Groupthree} from './Groupthree';
import {Phenol} from './Phenol';
import {Norm} from './Norm';
import {Complex} from './Complex';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['skeleton', Skeleton],
	['fg1', Groupone],
	['fg2', Grouptwo],
	['fg3', Groupthree],
	['phenol', Phenol],
	['norm', Norm],
	['complex', Complex],
	['review', Review],
];
