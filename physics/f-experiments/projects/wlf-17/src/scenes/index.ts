import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Mutual} from './Mutual';
import {Tool} from './Tool';
import {Method} from './Method';
import {Safe} from './Safe';
import {Data} from './Data';
import {Error} from './Error';
import {Law} from './Law';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['mutual', Mutual],
	['tool', Tool],
	['method', Method],
	['safe', Safe],
	['data', Data],
	['error', Error],
	['law', Law],
	['trap', Trap],
	['review', Review],
];
