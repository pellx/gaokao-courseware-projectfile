import React from 'react';
import type {T} from '../timeline';
import {After} from './After';
import {FlowScene} from './Flow';
import {Helper} from './Helper';
import {Intro} from './Intro';
import {Memory} from './Memory';
import {Network} from './Network';
import {Organ} from './Organ';
import {Process} from './Process';
import {Review} from './Review';
import {Virus} from './Virus';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['process', Process],
	['memory', Memory],
	['after', After],
	['helper', Helper],
	['virus', Virus],
	['network', Network],
	['organ', Organ],
	['flow', FlowScene],
	['review', Review],
];
