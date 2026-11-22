import React from 'react';
import type {T} from '../timeline';
import {Conditions} from './Conditions';
import {Contact} from './Contact';
import {Intro} from './Intro';
import {Overview} from './Overview';
import {Process} from './Process';
import {Review} from './Review';
import {Stem} from './Stem';
import {Stemapp} from './Stemapp';
import {Versus} from './Versus';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['overview', Overview],
	['conditions', Conditions],
	['process', Process],
	['contact', Contact],
	['stem', Stem],
	['stemapp', Stemapp],
	['versus', Versus],
	['review', Review],
];
