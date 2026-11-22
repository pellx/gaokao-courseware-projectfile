import React from 'react';
import type {T} from '../timeline';
import {Chicken} from './Chicken';
import {Colorblind} from './Colorblind';
import {Design} from './Design';
import {Intro} from './Intro';
import {Pedigree} from './Pedigree';
import {Review} from './Review';
import {Sexdet} from './Sexdet';
import {Xd} from './Xd';
import {Xr} from './Xr';
import {Ylink} from './Ylink';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['sexdet', Sexdet],
	['colorblind', Colorblind],
	['xr', Xr],
	['xd', Xd],
	['ylink', Ylink],
	['chicken', Chicken],
	['pedigree', Pedigree],
	['design', Design],
	['review', Review],
];
