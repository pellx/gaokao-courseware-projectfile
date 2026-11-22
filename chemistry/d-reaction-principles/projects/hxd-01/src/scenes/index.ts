import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Heat} from './Heat';
import {Kind} from './Kind';
import {Graph} from './Graph';
import {Bond} from './Bond';
import {Thermo} from './Thermo';
import {Combust} from './Combust';
import {Neutral} from './Neutral';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['heat', Heat],
	['kind', Kind],
	['graph', Graph],
	['bond', Bond],
	['thermo', Thermo],
	['combust', Combust],
	['neutral', Neutral],
	['review', Review],
];
