import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Shell} from './Shell';
import {Cap} from './Cap';
import {Spectra} from './Spectra';
import {Cloud} from './Cloud';
import {Orbital} from './Orbital';
import {Energy} from './Energy';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['shell', Shell],
	['cap', Cap],
	['spectra', Spectra],
	['cloud', Cloud],
	['orbital', Orbital],
	['energy', Energy],
	['trap', Trap],
	['review', Review],
];
