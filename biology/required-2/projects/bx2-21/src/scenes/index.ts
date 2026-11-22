import React from 'react';
import type {T} from '../timeline';
import {Adapt} from './Adapt';
import {Darwin} from './Darwin';
import {Evaluate} from './Evaluate';
import {Form} from './Form';
import {Intro} from './Intro';
import {Lamarck} from './Lamarck';
import {Order} from './Order';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['adapt', Adapt],
	['lamarck', Lamarck],
	['darwin', Darwin],
	['form', Form],
	['evaluate', Evaluate],
	['order', Order],
	['review', Review],
];
