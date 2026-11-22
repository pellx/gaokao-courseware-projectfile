import React from 'react';
import type {T} from '../timeline';
import {Count} from './Count';
import {Indep} from './Indep';
import {Infer} from './Infer';
import {Intro} from './Intro';
import {Lethal} from './Lethal';
import {Review} from './Review';
import {Split} from './Split';
import {Twodis} from './Twodis';
import {Variant} from './Variant';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['split', Split],
	['count', Count],
	['infer', Infer],
	['variant', Variant],
	['lethal', Lethal],
	['twodis', Twodis],
	['indep', Indep],
	['review', Review],
];
