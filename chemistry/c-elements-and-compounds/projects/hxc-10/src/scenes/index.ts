import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Ntwo} from './Ntwo';
import {Nox} from './Nox';
import {Calc} from './Calc';
import {Nhthree} from './Nhthree';
import {Prep} from './Prep';
import {Salt} from './Salt';
import {Det} from './Det';
import {Fountain} from './Fountain';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['n2', Ntwo],
	['nox', Nox],
	['calc', Calc],
	['nh3', Nhthree],
	['prep', Prep],
	['salt', Salt],
	['det', Det],
	['fountain', Fountain],
	['review', Review],
];
