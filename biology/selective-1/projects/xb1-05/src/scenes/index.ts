import React from 'react';
import type {T} from '../timeline';
import {Action} from './Action';
import {Conc} from './Conc';
import {Current} from './Current';
import {Curve} from './Curve';
import {Intro} from './Intro';
import {Meter} from './Meter';
import {Probe} from './Probe';
import {Rest} from './Rest';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['rest', Rest],
	['action', Action],
	['current', Current],
	['curve', Curve],
	['conc', Conc],
	['probe', Probe],
	['meter', Meter],
	['review', Review],
];
