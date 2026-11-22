import React from 'react';
import type {T} from '../timeline';
import {Autonomy} from './Autonomy';
import {Cases} from './Cases';
import {Intro} from './Intro';
import {Motor} from './Motor';
import {Review} from './Review';
import {Sensation} from './Sensation';
import {Somatic} from './Somatic';
import {Urine} from './Urine';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['motor', Motor],
	['somatic', Somatic],
	['urine', Urine],
	['cases', Cases],
	['autonomy', Autonomy],
	['sensation', Sensation],
	['review', Review],
];
