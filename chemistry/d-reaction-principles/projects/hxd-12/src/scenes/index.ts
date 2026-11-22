import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Weak} from './Weak';
import {Charge} from './Charge';
import {Mass} from './Mass';
import {Proton} from './Proton';
import {Single} from './Single';
import {Mixed} from './Mixed';
import {Method} from './Method';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['weak', Weak],
	['charge', Charge],
	['mass', Mass],
	['proton', Proton],
	['single', Single],
	['mixed', Mixed],
	['method', Method],
	['review', Review],
];
