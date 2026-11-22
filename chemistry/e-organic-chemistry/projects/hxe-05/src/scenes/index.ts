import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Omega} from './Omega';
import {Condone} from './Condone';
import {Condtwo} from './Condtwo';
import {Nmr} from './Nmr';
import {Ring} from './Ring';
import {Steps} from './Steps';
import {Formate} from './Formate';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['omega', Omega],
	['cond1', Condone],
	['cond2', Condtwo],
	['nmr', Nmr],
	['ring', Ring],
	['steps', Steps],
	['formate', Formate],
	['review', Review],
];
