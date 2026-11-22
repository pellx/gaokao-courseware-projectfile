import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Temp} from './Temp';
import {Ph} from './Ph';
import {Oxidant} from './Oxidant';
import {Reagent} from './Reagent';
import {Redoxeq} from './Redoxeq';
import {Nonredox} from './Nonredox';
import {Valence} from './Valence';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['temp', Temp],
	['ph', Ph],
	['oxidant', Oxidant],
	['reagent', Reagent],
	['redoxeq', Redoxeq],
	['nonredox', Nonredox],
	['valence', Valence],
	['review', Review],
];
