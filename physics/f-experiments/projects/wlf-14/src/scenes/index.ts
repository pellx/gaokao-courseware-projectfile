import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Purpose} from './Purpose';
import {Structure} from './Structure';
import {Ohm} from './Ohm';
import {Zero} from './Zero';
import {RedBlack} from './RedBlack';
import {Vi} from './Vi';
import {RSteps} from './RSteps';
import {Diode} from './Diode';
import {Off} from './Off';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['purpose', Purpose],
	['structure', Structure],
	['ohm', Ohm],
	['zero', Zero],
	['redblack', RedBlack],
	['vi', Vi],
	['rsteps', RSteps],
	['diode', Diode],
	['off', Off],
	['review', Review],
];
