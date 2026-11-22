import React from 'react';
import type {T} from '../timeline';
import {Apply} from './Apply';
import {Bcell} from './Bcell';
import {Compare} from './Compare';
import {Fusion} from './Fusion';
import {Hybridoma} from './Hybridoma';
import {Intro} from './Intro';
import {Process} from './Process';
import {Review} from './Review';
import {Screen} from './Screen';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['fusion', Fusion],
	['compare', Compare],
	['process', Process],
	['screen', Screen],
	['hybridoma', Hybridoma],
	['apply', Apply],
	['bcell', Bcell],
	['review', Review],
];
