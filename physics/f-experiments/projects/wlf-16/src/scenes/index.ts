import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Idea} from './Idea';
import {Tool} from './Tool';
import {Prep} from './Prep';
import {Step} from './Step';
import {Record} from './Record';
import {Result} from './Result';
import {Lenz} from './Lenz';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['idea', Idea],
	['tool', Tool],
	['prep', Prep],
	['step', Step],
	['record', Record],
	['result', Result],
	['lenz', Lenz],
	['trap', Trap],
	['review', Review],
];
