import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Circuit} from './Circuit';
import {Charge} from './Charge';
import {Discharge} from './Discharge';
import {Sensor} from './Sensor';
import {Data} from './Data';
import {End} from './End';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['circuit', Circuit],
	['charge', Charge],
	['discharge', Discharge],
	['sensor', Sensor],
	['data', Data],
	['end', End],
	['review', Review],
];
