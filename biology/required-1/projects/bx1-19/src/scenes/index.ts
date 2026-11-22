import React from 'react';
import type {T} from '../timeline';
import {Abnormal} from './Abnormal';
import {Chloroplast} from './Chloroplast';
import {Engelmann} from './Engelmann';
import {Intro} from './Intro';
import {Principle} from './Principle';
import {Result} from './Result';
import {Review} from './Review';
import {Spectrum} from './Spectrum';
import {Steps} from './Steps';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['principle', Principle],
	['steps', Steps],
	['result', Result],
	['abnormal', Abnormal],
	['spectrum', Spectrum],
	['chloroplast', Chloroplast],
	['engelmann', Engelmann],
	['review', Review],
];
