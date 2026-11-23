import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Device} from './Device';
import {Balance} from './Balance';
import {Approx} from './Approx';
import {Steps} from './Steps';
import {TwoCar} from './TwoCar';
import {Data} from './Data';
import {Error} from './Error';
import {Result} from './Result';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['device', Device],
	['balance', Balance],
	['approx', Approx],
	['steps', Steps],
	['twocar', TwoCar],
	['data', Data],
	['error', Error],
	['result', Result],
	['review', Review],
];
