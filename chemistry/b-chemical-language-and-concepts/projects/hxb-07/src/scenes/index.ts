import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Mol} from './Mol';
import {Molar} from './Molar';
import {Vm} from './Vm';
import {Avo} from './Avo';
import {Count} from './Count';
import {Net} from './Net';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['mol', Mol],
	['molar', Molar],
	['vm', Vm],
	['avo', Avo],
	['count', Count],
	['net', Net],
	['review', Review],
];
