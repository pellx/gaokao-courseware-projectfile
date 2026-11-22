import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Newton} from './Newton';
import {Light} from './Light';
import {Postulate} from './Postulate';
import {Simul} from './Simul';
import {Dilate} from './Dilate';
import {Contract} from './Contract';
import {Limit} from './Limit';
import {Cosmos} from './Cosmos';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['newton', Newton],
	['light', Light],
	['postulate', Postulate],
	['simul', Simul],
	['dilate', Dilate],
	['contract', Contract],
	['limit', Limit],
	['cosmos', Cosmos],
	['review', Review],
];
