import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Build} from './Build';
import {Ksp} from './Ksp';
import {Qksp} from './Qksp';
import {Solubility} from './Solubility';
import {Form} from './Form';
import {Dissolve} from './Dissolve';
import {Convert} from './Convert';
import {Curve} from './Curve';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['build', Build],
	['ksp', Ksp],
	['qk', Qksp],
	['sol', Solubility],
	['form', Form],
	['dissolve', Dissolve],
	['convert', Convert],
	['curve', Curve],
	['review', Review],
];
