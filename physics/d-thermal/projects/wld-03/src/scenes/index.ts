import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Param} from './Param';
import {Equil} from './Equil';
import {Hot} from './Hot';
import {Temp} from './Temp';
import {Scale} from './Scale';
import {Boyle} from './Boyle';
import {Iso} from './Iso';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['param', Param],
	['equil', Equil],
	['hot', Hot],
	['temp', Temp],
	['scale', Scale],
	['boyle', Boyle],
	['iso', Iso],
	['review', Review],
];
