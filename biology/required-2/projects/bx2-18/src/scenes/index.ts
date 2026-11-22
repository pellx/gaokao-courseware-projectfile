import React from 'react';
import type {T} from '../timeline';
import {Breeding} from './Breeding';
import {Haploid} from './Haploid';
import {Intro} from './Intro';
import {Mutvs} from './Mutvs';
import {Result} from './Result';
import {Review} from './Review';
import {Seedless} from './Seedless';
import {Swap} from './Swap';
import {Types} from './Types';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['types', Types],
	['result', Result],
	['swap', Swap],
	['mutvs', Mutvs],
	['seedless', Seedless],
	['haploid', Haploid],
	['breeding', Breeding],
	['review', Review],
];
