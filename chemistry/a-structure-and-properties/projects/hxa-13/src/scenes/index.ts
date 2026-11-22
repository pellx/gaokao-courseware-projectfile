import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Vdw} from './Vdw';
import {Hbond} from './Hbond';
import {Inter} from './Inter';
import {Intra} from './Intra';
import {Density} from './Density';
import {Solubility} from './Solubility';
import {Unrelated} from './Unrelated';
import {Norm} from './Norm';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['vdw', Vdw],
	['hbond', Hbond],
	['inter', Inter],
	['intra', Intra],
	['density', Density],
	['solubility', Solubility],
	['unrelated', Unrelated],
	['norm', Norm],
	['trap', Trap],
	['review', Review],
];
