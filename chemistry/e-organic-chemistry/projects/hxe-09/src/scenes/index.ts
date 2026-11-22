import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Phys} from './Phys';
import {Hydro} from './Hydro';
import {Elim} from './Elim';
import {Compare} from './Compare';
import {Detect} from './Detect';
import {Bridge} from './Bridge';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['phys', Phys],
	['hydro', Hydro],
	['elim', Elim],
	['compare', Compare],
	['detect', Detect],
	['bridge', Bridge],
	['review', Review],
];
