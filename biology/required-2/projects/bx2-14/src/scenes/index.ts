import React from 'react';
import type {T} from '../timeline';
import {Codon} from './Codon';
import {Concept} from './Concept';
import {Dogma} from './Dogma';
import {Intro} from './Intro';
import {Polysome} from './Polysome';
import {Process} from './Process';
import {Prok} from './Prok';
import {Ratio} from './Ratio';
import {Review} from './Review';
import {Trna} from './Trna';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['codon', Codon],
	['trna', Trna],
	['process', Process],
	['polysome', Polysome],
	['prok', Prok],
	['ratio', Ratio],
	['dogma', Dogma],
	['review', Review],
];
