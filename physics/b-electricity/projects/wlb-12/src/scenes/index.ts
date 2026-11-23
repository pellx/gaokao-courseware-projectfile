import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Force} from './Force';
import {Dir} from './Dir';
import {Size} from './Size';
import {Parallel} from './Parallel';
import {Build} from './Build';
import {Meter} from './Meter';
import {Motor} from './Motor';
import {Clear} from './Clear';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['force', Force],
	['dir', Dir],
	['size', Size],
	['parallel', Parallel],
	['build', Build],
	['meter', Meter],
	['motor', Motor],
	['clear', Clear],
	['review', Review],
];
