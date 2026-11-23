import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Derive} from './Derive';
import {Ek} from './Ek';
import {State} from './State';
import {Theorem} from './Theorem';
import {TotalW} from './TotalW';
import {Range} from './Range';
import {Meaning} from './Meaning';
import {Scalar} from './Scalar';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['derive', Derive],
	['ek', Ek],
	['state', State],
	['theorem', Theorem],
	['w', TotalW],
	['range', Range],
	['meaning', Meaning],
	['scalar', Scalar],
	['review', Review],
];
