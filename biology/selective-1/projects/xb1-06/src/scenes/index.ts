import React from 'react';
import type {T} from '../timeline';
import {Cocaine} from './Cocaine';
import {Drugs} from './Drugs';
import {Inhibit} from './Inhibit';
import {Intro} from './Intro';
import {Meter} from './Meter';
import {Oneway} from './Oneway';
import {Process} from './Process';
import {Review} from './Review';
import {Structure} from './Structure';
import {Transmitter} from './Transmitter';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['structure', Structure],
	['process', Process],
	['transmitter', Transmitter],
	['inhibit', Inhibit],
	['oneway', Oneway],
	['drugs', Drugs],
	['cocaine', Cocaine],
	['meter', Meter],
	['review', Review],
];
