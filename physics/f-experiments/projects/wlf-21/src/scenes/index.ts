import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Model} from './Model';
import {Tool} from './Tool';
import {Dilute} from './Dilute';
import {Vol} from './Vol';
import {Area} from './Area';
import {Calc} from './Calc';
import {Error} from './Error';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['model', Model],
	['tool', Tool],
	['dilute', Dilute],
	['vol', Vol],
	['area', Area],
	['calc', Calc],
	['error', Error],
	['trap', Trap],
	['review', Review],
];
