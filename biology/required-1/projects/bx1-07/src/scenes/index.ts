import React from 'react';
import type {T} from '../timeline';
import {Compare} from './Compare';
import {Count} from './Count';
import {Func} from './Func';
import {Genetic} from './Genetic';
import {Intro} from './Intro';
import {Kind} from './Kind';
import {Monomer} from './Monomer';
import {Nucleotide} from './Nucleotide';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['kind', Kind],
	['nucleotide', Nucleotide],
	['compare', Compare],
	['count', Count],
	['genetic', Genetic],
	['function', Func],
	['monomer', Monomer],
	['review', Review],
];
