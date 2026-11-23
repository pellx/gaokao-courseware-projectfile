import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Fission} from './Fission';
import {Chain} from './Chain';
import {Reactor} from './Reactor';
import {Plant} from './Plant';
import {Fusion} from './Fusion';
import {Cond} from './Cond';
import {Control} from './Control';
import {Particle} from './Particle';
import {Quark} from './Quark';
import {History} from './History';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['fission', Fission],
	['chain', Chain],
	['reactor', Reactor],
	['plant', Plant],
	['fusion', Fusion],
	['cond', Cond],
	['control', Control],
	['particle', Particle],
	['quark', Quark],
	['history', History],
	['review', Review],
];
