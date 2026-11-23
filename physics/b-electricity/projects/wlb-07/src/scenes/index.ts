import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Source} from './Source';
import {Steady} from './Steady';
import {Current} from './Current';
import {Micro} from './Micro';
import {Ohm} from './Ohm';
import {Law} from './Law';
import {Rho} from './Rho';
import {IU} from './IU';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['source', Source],
	['steady', Steady],
	['current', Current],
	['micro', Micro],
	['ohm', Ohm],
	['law', Law],
	['rho', Rho],
	['iu', IU],
	['review', Review],
];
