import React from 'react';
import type {T} from '../timeline';
import {Debate} from './Debate';
import {Intro} from './Intro';
import {Method} from './Method';
import {Policy} from './Policy';
import {Pros} from './Pros';
import {Rational} from './Rational';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['pros', Pros],
	['debate', Debate],
	['policy', Policy],
	['rational', Rational],
	['method', Method],
	['review', Review],
];
