import React from 'react';
import type {T} from '../timeline';
import {Compare} from './Compare';
import {Intro} from './Intro';
import {Isolation} from './Isolation';
import {Polyploid} from './Polyploid';
import {Process} from './Process';
import {Review} from './Review';
import {Role} from './Role';
import {Species} from './Species';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['species', Species],
	['isolation', Isolation],
	['process', Process],
	['role', Role],
	['polyploid', Polyploid],
	['compare', Compare],
	['review', Review],
];
