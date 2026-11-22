import React from 'react';
import type {T} from '../timeline';
import {Detect} from './Detect';
import {Exp} from './Exp';
import {Intro} from './Intro';
import {Review} from './Review';
import {Transplant} from './Transplant';
import {Treat} from './Treat';
import {Vaccine} from './Vaccine';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['vaccine', Vaccine],
	['treat', Treat],
	['transplant', Transplant],
	['detect', Detect],
	['exp', Exp],
	['review', Review],
];
