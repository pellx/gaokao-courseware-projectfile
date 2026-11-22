import React from 'react';
import type {T} from '../timeline';
import {Compare} from './Compare';
import {Haploid} from './Haploid';
import {Intro} from './Intro';
import {Mutant} from './Mutant';
import {Product} from './Product';
import {Rapid} from './Rapid';
import {Review} from './Review';
import {Virus} from './Virus';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['rapid', Rapid],
	['virus', Virus],
	['haploid', Haploid],
	['mutant', Mutant],
	['product', Product],
	['compare', Compare],
	['review', Review],
];
