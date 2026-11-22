import React from 'react';
import type {T} from '../timeline';
import {Build} from './Build';
import {Calc} from './Calc';
import {Codon} from './Codon';
import {Intro} from './Intro';
import {Pcr} from './Pcr';
import {Review} from './Review';
import {Steps} from './Steps';
import {Target} from './Target';
import {Vector} from './Vector';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['steps', Steps],
	['target', Target],
	['pcr', Pcr],
	['calc', Calc],
	['vector', Vector],
	['build', Build],
	['codon', Codon],
	['review', Review],
];
