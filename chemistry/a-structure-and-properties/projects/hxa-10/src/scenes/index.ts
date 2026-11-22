import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Shapes} from './Shapes';
import {Count} from './Count';
import {Model} from './Model';
import {Table} from './Table';
import {Judge} from './Judge';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['shapes', Shapes],
	['count', Count],
	['model', Model],
	['table', Table],
	['judge', Judge],
	['trap', Trap],
	['review', Review],
];
