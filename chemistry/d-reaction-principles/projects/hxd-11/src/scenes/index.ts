import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Essence} from './Essence';
import {Rule} from './Rule';
import {Equation} from './Equation';
import {Factor} from './Factor';
import {Acidic} from './Acidic';
import {Double} from './Double';
import {Apply} from './Apply';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['essence', Essence],
	['rule', Rule],
	['eq', Equation],
	['factor', Factor],
	['acidic', Acidic],
	['double', Double],
	['apply', Apply],
	['review', Review],
];
