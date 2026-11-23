import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Work} from './Work';
import {Energy} from './Energy';
import {Change} from './Change';
import {Relative} from './Relative';
import {Potential} from './Potential';
import {Down} from './Down';
import {Ep} from './Ep';
import {Relation} from './Relation';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['work', Work],
	['energy', Energy],
	['change', Change],
	['relative', Relative],
	['potential', Potential],
	['down', Down],
	['ep', Ep],
	['relation', Relation],
	['review', Review],
];
