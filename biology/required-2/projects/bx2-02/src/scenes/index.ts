import React from 'react';
import type {T} from '../timeline';
import {Dominance} from './Dominance';
import {Infer} from './Infer';
import {Intro} from './Intro';
import {Law} from './Law';
import {Lethal} from './Lethal';
import {Prob} from './Prob';
import {Purity} from './Purity';
import {Random} from './Random';
import {Review} from './Review';
import {Selfing} from './Selfing';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['law', Law],
	['dominance', Dominance],
	['purity', Purity],
	['infer', Infer],
	['selfing', Selfing],
	['random', Random],
	['lethal', Lethal],
	['prob', Prob],
	['review', Review],
];
