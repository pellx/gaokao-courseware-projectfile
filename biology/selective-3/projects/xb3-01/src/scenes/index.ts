import React from 'react';
import type {T} from '../timeline';
import {Detect} from './Detect';
import {Device} from './Device';
import {Ferment} from './Ferment';
import {Furu} from './Furu';
import {Intro} from './Intro';
import {Nitrite} from './Nitrite';
import {Pickle} from './Pickle';
import {Review} from './Review';
import {Vinegar} from './Vinegar';
import {Wine} from './Wine';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['ferment', Ferment],
	['furu', Furu],
	['pickle', Pickle],
	['nitrite', Nitrite],
	['wine', Wine],
	['vinegar', Vinegar],
	['device', Device],
	['detect', Detect],
	['review', Review],
];
