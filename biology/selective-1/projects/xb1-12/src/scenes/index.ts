import React from 'react';
import type {T} from '../timeline';
import {Aldo} from './Aldo';
import {Cold} from './Cold';
import {Compare} from './Compare';
import {Concept} from './Concept';
import {Fever} from './Fever';
import {Hot} from './Hot';
import {Hypo} from './Hypo';
import {Intro} from './Intro';
import {Relation} from './Relation';
import {Review} from './Review';
import {UrineCurve} from './UrineCurve';
import {Water} from './Water';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['compare', Compare],
	['relation', Relation],
	['cold', Cold],
	['hot', Hot],
	['water', Water],
	['aldo', Aldo],
	['hypo', Hypo],
	['urinecurve', UrineCurve],
	['fever', Fever],
	['review', Review],
];
