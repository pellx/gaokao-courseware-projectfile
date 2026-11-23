import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Timer} from './Timer';
import {Device} from './Device';
import {Steps} from './Steps';
import {Count} from './Count';
import {Speed} from './Speed';
import {Data} from './Data';
import {Error} from './Error';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['timer', Timer],
	['device', Device],
	['steps', Steps],
	['count', Count],
	['speed', Speed],
	['data', Data],
	['error', Error],
	['review', Review],
];
