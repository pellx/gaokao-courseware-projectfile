import React from 'react';
import type {T} from '../timeline';
import {Curves} from './Curves';
import {Diabetes} from './Diabetes';
import {Experiment} from './Experiment';
import {Feedback} from './Feedback';
import {Hormones} from './Hormones';
import {Intro} from './Intro';
import {Process} from './Process';
import {Review} from './Review';
import {Sources} from './Sources';
import {Urine} from './Urine';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['sources', Sources],
	['hormones', Hormones],
	['process', Process],
	['feedback', Feedback],
	['curves', Curves],
	['diabetes', Diabetes],
	['urine', Urine],
	['experiment', Experiment],
	['review', Review],
];
