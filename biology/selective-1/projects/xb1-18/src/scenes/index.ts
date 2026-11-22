import React from 'react';
import type {T} from '../timeline';
import {Concept} from './Concept';
import {Darwin} from './Darwin';
import {Iaa} from './Iaa';
import {Intro} from './Intro';
import {Jensen} from './Jensen';
import {Judge} from './Judge';
import {Paal} from './Paal';
import {PhotoScene} from './Photo';
import {Review} from './Review';
import {Went} from './Went';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['darwin', Darwin],
	['jensen', Jensen],
	['paal', Paal],
	['went', Went],
	['iaa', Iaa],
	['photo', PhotoScene],
	['concept', Concept],
	['judge', Judge],
	['review', Review],
];
