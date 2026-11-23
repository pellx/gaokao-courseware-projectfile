import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Dense} from './Dense';
import {Total} from './Total';
import {Crit} from './Crit';
import {Cond} from './Cond';
import {Prism} from './Prism';
import {Fiber} from './Fiber';
import {Use} from './Use';
import {Bubble} from './Bubble';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['dense', Dense],
	['total', Total],
	['crit', Crit],
	['cond', Cond],
	['prism', Prism],
	['fiber', Fiber],
	['use', Use],
	['bubble', Bubble],
	['review', Review],
];
