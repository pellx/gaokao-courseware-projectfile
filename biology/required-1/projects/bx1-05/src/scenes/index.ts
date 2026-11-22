import React from 'react';
import type {T} from '../timeline';
import {Compare} from './Compare';
import {Convert} from './Convert';
import {Di} from './Di';
import {Fat} from './Fat';
import {Intro} from './Intro';
import {Lipid} from './Lipid';
import {Mono} from './Mono';
import {Poly} from './Poly';
import {Review} from './Review';
import {Sugar} from './Sugar';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['sugar', Sugar],
	['mono', Mono],
	['di', Di],
	['poly', Poly],
	['lipid', Lipid],
	['fat', Fat],
	['compare', Compare],
	['convert', Convert],
	['review', Review],
];
