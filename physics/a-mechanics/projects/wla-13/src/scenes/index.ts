import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Bridge} from './Bridge';
import {Two} from './Two';
import {Apparent} from './Apparent';
import {Over} from './Over';
import {Under} from './Under';
import {Complete} from './Complete';
import {Life} from './Life';
import {Dir} from './Dir';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['bridge', Bridge],
	['two', Two],
	['apparent', Apparent],
	['over', Over],
	['under', Under],
	['complete', Complete],
	['life', Life],
	['dir', Dir],
	['review', Review],
];
