import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {State} from './State';
import {Sign} from './Sign';
import {Conc} from './Conc';
import {Press} from './Press';
import {Temp} from './Temp';
import {Catalyst} from './Catalyst';
import {Lcp} from './Lcp';
import {Template} from './Template';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['state', State],
	['sign', Sign],
	['conc', Conc],
	['press', Press],
	['temp', Temp],
	['cat', Catalyst],
	['lcp', Lcp],
	['tpl', Template],
	['review', Review],
];
