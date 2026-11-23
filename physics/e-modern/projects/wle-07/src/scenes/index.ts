import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Natural} from './Natural';
import {Rays} from './Rays';
import {Discover} from './Discover';
import {Compose} from './Compose';
import {Alpha} from './Alpha';
import {Beta} from './Beta';
import {Gamma} from './Gamma';
import {HalfLife} from './HalfLife';
import {Reaction} from './Reaction';
import {Apply} from './Apply';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['natural', Natural],
	['rays', Rays],
	['discover', Discover],
	['compose', Compose],
	['alpha', Alpha],
	['beta', Beta],
	['gamma', Gamma],
	['halflife', HalfLife],
	['reaction', Reaction],
	['apply', Apply],
	['review', Review],
];
