import React from 'react';
import type {T} from '../timeline';
import {Axes} from './Axes';
import {AxisScene} from './AxisScene';
import {Diagnose} from './Diagnose';
import {Features} from './Features';
import {Goiter} from './Goiter';
import {Grading} from './Grading';
import {Intro} from './Intro';
import {Negative} from './Negative';
import {Ops} from './Ops';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['axis', AxisScene],
	['grading', Grading],
	['negative', Negative],
	['goiter', Goiter],
	['axes', Axes],
	['ops', Ops],
	['features', Features],
	['diagnose', Diagnose],
	['review', Review],
];
