import React from 'react';
import type {T} from '../timeline';
import {Factors} from './Factors';
import {Footprint} from './Footprint';
import {Intro} from './Intro';
import {Climate, Ozone, Water} from './Issues';
import {Review} from './Review';
import {Sustain} from './Sustain';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['footprint', Footprint],
	['factors', Factors],
	['climate', Climate],
	['ozone', Ozone],
	['water', Water],
	['sustain', Sustain],
	['review', Review],
];
