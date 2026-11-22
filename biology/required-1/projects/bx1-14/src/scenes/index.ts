import React from 'react';
import type {T} from '../timeline';
import {Activation} from './Activation';
import {Concept} from './Concept';
import {Diagram} from './Diagram';
import {H2o2} from './H2o2';
import {History} from './History';
import {Intro} from './Intro';
import {Metab} from './Metab';
import {Review} from './Review';
import {Variable} from './Variable';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['metab', Metab],
	['h2o2', H2o2],
	['variable', Variable],
	['activation', Activation],
	['diagram', Diagram],
	['history', History],
	['concept', Concept],
	['review', Review],
];
