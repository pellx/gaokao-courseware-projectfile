import React from 'react';
import type {T} from '../timeline';
import {Abiotic} from './Abiotic';
import {Biotic} from './Biotic';
import {Density} from './Density';
import {Intro} from './Intro';
import {Pest} from './Pest';
import {Predator} from './Predator';
import {Protect} from './Protect';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['abiotic', Abiotic],
	['biotic', Biotic],
	['density', Density],
	['predator', Predator],
	['protect', Protect],
	['pest', Pest],
	['review', Review],
];
