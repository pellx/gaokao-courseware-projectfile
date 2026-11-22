import React from 'react';
import type {T} from '../timeline';
import {Colchicine} from './Colchicine';
import {Genome} from './Genome';
import {Haploid} from './Haploid';
import {Intro} from './Intro';
import {Lowtemp} from './Lowtemp';
import {Ploidy} from './Ploidy';
import {Review} from './Review';
import {Types} from './Types';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['types', Types],
	['genome', Genome],
	['ploidy', Ploidy],
	['haploid', Haploid],
	['colchicine', Colchicine],
	['lowtemp', Lowtemp],
	['review', Review],
];
