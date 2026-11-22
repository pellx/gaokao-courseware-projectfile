import React from 'react';
import type {T} from '../timeline';
import {Action} from './Action';
import {ApicalScene} from './ApicalScene';
import {Dist} from './Dist';
import {Feature} from './Feature';
import {GravityScene} from './GravityScene';
import {Intro} from './Intro';
import {Organ} from './Organ';
import {PolarScene} from './PolarScene';
import {Review} from './Review';
import {Synth} from './Synth';
import {Transport} from './Transport';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['synth', Synth],
	['transport', Transport],
	['dist', Dist],
	['action', Action],
	['feature', Feature],
	['organ', Organ],
	['apical', ApicalScene],
	['gravity', GravityScene],
	['polar', PolarScene],
	['review', Review],
];
