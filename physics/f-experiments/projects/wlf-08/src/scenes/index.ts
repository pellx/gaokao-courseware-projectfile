import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Device} from './Device';
import {Omega} from './Omega';
import {RadiusMass} from './RadiusMass';
import {Steps} from './Steps';
import {Data} from './Data';
import {Error} from './Error';
import {End} from './End';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['device', Device],
	['omega', Omega],
	['rm', RadiusMass],
	['steps', Steps],
	['data', Data],
	['error', Error],
	['end', End],
	['review', Review],
];
