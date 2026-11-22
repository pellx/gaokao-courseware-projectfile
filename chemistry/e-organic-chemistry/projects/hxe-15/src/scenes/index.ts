import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Task} from './Task';
import {Chainlen} from './Chainlen';
import {Introduce} from './Introduce';
import {Convert} from './Convert';
import {Protect} from './Protect';
import {Method} from './Method';
import {Breakthrough} from './Breakthrough';
import {Route} from './Route';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['task', Task],
	['chain', Chainlen],
	['introduce', Introduce],
	['convert', Convert],
	['protect', Protect],
	['method', Method],
	['breakthrough', Breakthrough],
	['route', Route],
	['review', Review],
];
