import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Restore} from './Restore';
import {Dyn} from './Dyn';
import {Acc} from './Acc';
import {Vert} from './Vert';
import {Trend} from './Trend';
import {Energy} from './Energy';
import {Cons} from './Cons';
import {Dir} from './Dir';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['restore', Restore],
	['dyn', Dyn],
	['acc', Acc],
	['vert', Vert],
	['trend', Trend],
	['energy', Energy],
	['cons', Cons],
	['dir', Dir],
	['review', Review],
];
