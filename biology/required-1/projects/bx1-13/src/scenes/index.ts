import React from 'react';
import type {T} from '../timeline';
import {Active} from './Active';
import {Compare} from './Compare';
import {Conc} from './Conc';
import {Endo} from './Endo';
import {Intro} from './Intro';
import {Judge} from './Judge';
import {Meaning} from './Meaning';
import {Oxygen} from './Oxygen';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['active', Active],
	['meaning', Meaning],
	['compare', Compare],
	['conc', Conc],
	['oxygen', Oxygen],
	['endo', Endo],
	['judge', Judge],
	['review', Review],
];
