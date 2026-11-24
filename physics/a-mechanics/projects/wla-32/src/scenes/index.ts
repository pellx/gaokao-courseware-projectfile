import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Natural} from './Natural';
import {Damp} from './Damp';
import {Forced} from './Forced';
import {Freq} from './Freq';
import {Res} from './Res';
import {Curve} from './Curve';
import {Use} from './Use';
import {Avoid} from './Avoid';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['natural', Natural],
	['damp', Damp],
	['forced', Forced],
	['freq', Freq],
	['res', Res],
	['curve', Curve],
	['use', Use],
	['avoid', Avoid],
	['review', Review],
];
