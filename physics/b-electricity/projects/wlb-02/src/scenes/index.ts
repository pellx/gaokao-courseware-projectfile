import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Field} from './Field';
import {Test} from './Test';
import {Strength} from './Strength';
import {PointE} from './PointE';
import {SuperE} from './SuperE';
import {Lines} from './Lines';
import {Uniform} from './Uniform';
import {Path} from './Path';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['field', Field],
	['test', Test],
	['strength', Strength],
	['pointE', PointE],
	['superE', SuperE],
	['lines', Lines],
	['uniform', Uniform],
	['path', Path],
	['review', Review],
];
