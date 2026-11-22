import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Thermal} from './Thermal';
import {Black} from './Black';
import {Law} from './Law';
import {Classic} from './Classic';
import {Quantum} from './Quantum';
import {Discrete} from './Discrete';
import {Photon} from './Photon';
import {Level} from './Level';
import {Emit} from './Emit';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['thermal', Thermal],
	['black', Black],
	['law', Law],
	['classic', Classic],
	['quantum', Quantum],
	['discrete', Discrete],
	['photon', Photon],
	['level', Level],
	['emit', Emit],
	['review', Review],
];
