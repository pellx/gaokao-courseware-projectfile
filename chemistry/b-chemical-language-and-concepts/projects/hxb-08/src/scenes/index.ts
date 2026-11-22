import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Conc} from './Conc';
import {Convert} from './Convert';
import {Tools} from './Tools';
import {Steps} from './Steps';
import {Error} from './Error';
import {Eqcalc} from './Eqcalc';
import {Norm} from './Norm';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['conc', Conc],
	['convert', Convert],
	['tools', Tools],
	['steps', Steps],
	['error', Error],
	['eqcalc', Eqcalc],
	['norm', Norm],
	['review', Review],
];
