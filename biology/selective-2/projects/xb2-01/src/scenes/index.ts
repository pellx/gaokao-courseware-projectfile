import React from 'react';
import type {T} from '../timeline';
import {Age} from './Age';
import {Density} from './Density';
import {Intro} from './Intro';
import {Mark} from './Mark';
import {Other} from './Other';
import {Quadrat} from './Quadrat';
import {Rates} from './Rates';
import {Relation} from './Relation';
import {Review} from './Review';
import {Sex} from './Sex';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['density', Density],
	['quadrat', Quadrat],
	['mark', Mark],
	['other', Other],
	['rates', Rates],
	['age', Age],
	['sex', Sex],
	['relation', Relation],
	['review', Review],
];
