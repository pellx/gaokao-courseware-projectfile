import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Structure} from './Structure';
import {Goal} from './Goal';
import {Control} from './Control';
import {Blank} from './Blank';
import {Exclude} from './Exclude';
import {Complete} from './Complete';
import {Topics} from './Topics';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['structure', Structure],
	['goal', Goal],
	['control', Control],
	['blank', Blank],
	['exclude', Exclude],
	['complete', Complete],
	['topics', Topics],
	['review', Review],
];
