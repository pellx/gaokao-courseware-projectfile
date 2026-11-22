import React from 'react';
import type {T} from '../timeline';
import {Compare} from './Compare';
import {Concept} from './Concept';
import {Ends} from './Ends';
import {Enzyme} from './Enzyme';
import {Extract} from './Extract';
import {Intro} from './Intro';
import {Ligase} from './Ligase';
import {Plasmid} from './Plasmid';
import {Review} from './Review';
import {Vectors} from './Vectors';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['enzyme', Enzyme],
	['ends', Ends],
	['ligase', Ligase],
	['plasmid', Plasmid],
	['vectors', Vectors],
	['extract', Extract],
	['compare', Compare],
	['review', Review],
];
