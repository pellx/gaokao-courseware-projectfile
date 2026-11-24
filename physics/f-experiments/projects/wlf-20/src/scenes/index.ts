import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Principle} from './Principle';
import {Device} from './Device';
import {Adjust} from './Adjust';
import {Head} from './Head';
import {Measure} from './Measure';
import {Observe} from './Observe';
import {Error} from './Error';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['principle', Principle],
	['device', Device],
	['adjust', Adjust],
	['head', Head],
	['measure', Measure],
	['observe', Observe],
	['error', Error],
	['trap', Trap],
	['review', Review],
];
