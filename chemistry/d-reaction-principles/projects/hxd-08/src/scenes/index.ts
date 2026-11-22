import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Strong} from './Strong';
import {Ionize} from './Ionize';
import {Factor} from './Factor';
import {Dilute} from './Dilute';
import {Ka} from './Ka';
import {Kauses} from './Kauses';
import {Compare} from './Compare';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['strong', Strong],
	['ionize', Ionize],
	['factor', Factor],
	['dilute', Dilute],
	['ka', Ka],
	['react', Kauses],
	['compare', Compare],
	['review', Review],
];
