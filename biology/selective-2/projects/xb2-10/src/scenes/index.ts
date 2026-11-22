import React from 'react';
import type {T} from '../timeline';
import {Bioacc} from './Bioacc';
import {Carbon} from './Carbon';
import {Climate} from './Climate';
import {Concept} from './Concept';
import {Diagram} from './Diagram';
import {Intro} from './Intro';
import {Relation} from './Relation';
import {Review} from './Review';
import {Soil} from './Soil';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['carbon', Carbon],
	['diagram', Diagram],
	['climate', Climate],
	['bioacc', Bioacc],
	['relation', Relation],
	['soil', Soil],
	['review', Review],
];
