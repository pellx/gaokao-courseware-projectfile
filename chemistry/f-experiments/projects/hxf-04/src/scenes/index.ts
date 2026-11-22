import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Principle} from './Principle';
import {Filter} from './Filter';
import {Crystal} from './Crystal';
import {Extract} from './Extract';
import {Distill} from './Distill';
import {Recryst} from './Recryst';
import {Wash} from './Wash';
import {Impurity} from './Impurity';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['principle', Principle],
	['filter', Filter],
	['crystal', Crystal],
	['extract', Extract],
	['distill', Distill],
	['recryst', Recryst],
	['wash', Wash],
	['impurity', Impurity],
	['review', Review],
];
