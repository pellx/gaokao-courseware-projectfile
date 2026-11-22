import React from 'react';
import type {T} from '../timeline';
import {Abnormal} from './Abnormal';
import {Diversity} from './Diversity';
import {Fert} from './Fert';
import {Intro} from './Intro';
import {Meaning} from './Meaning';
import {Model} from './Model';
import {Observe} from './Observe';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['observe', Observe],
	['model', Model],
	['fert', Fert],
	['meaning', Meaning],
	['diversity', Diversity],
	['abnormal', Abnormal],
	['review', Review],
];
