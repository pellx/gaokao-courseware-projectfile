import React from 'react';
import type {T} from '../timeline';
import {Arc} from './Arc';
import {Broken} from './Broken';
import {Intro} from './Intro';
import {Judge} from './Judge';
import {Meaning} from './Meaning';
import {Pavlov} from './Pavlov';
import {Reflex} from './Reflex';
import {Review} from './Review';
import {Types} from './Types';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['reflex', Reflex],
	['arc', Arc],
	['judge', Judge],
	['broken', Broken],
	['types', Types],
	['pavlov', Pavlov],
	['meaning', Meaning],
	['review', Review],
];
