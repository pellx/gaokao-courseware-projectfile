import React from 'react';
import type {T} from '../timeline';
import {Amplify} from './Amplify';
import {Animal} from './Animal';
import {Detect} from './Detect';
import {Gel} from './Gel';
import {Individual} from './Individual';
import {Intro} from './Intro';
import {Microbe} from './Microbe';
import {Plant} from './Plant';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['plant', Plant],
	['animal', Animal],
	['microbe', Microbe],
	['detect', Detect],
	['individual', Individual],
	['amplify', Amplify],
	['gel', Gel],
	['review', Review],
];
