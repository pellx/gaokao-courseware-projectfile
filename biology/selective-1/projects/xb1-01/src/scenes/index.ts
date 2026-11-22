import React from 'react';
import type {T} from '../timeline';
import {Cells} from './Cells';
import {Composition} from './Composition';
import {Edema} from './Edema';
import {Exchange} from './Exchange';
import {Fluid} from './Fluid';
import {Intro} from './Intro';
import {Physics} from './Physics';
import {Plasma} from './Plasma';
import {Relation} from './Relation';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['fluid', Fluid],
	['relation', Relation],
	['cells', Cells],
	['composition', Composition],
	['plasma', Plasma],
	['physics', Physics],
	['exchange', Exchange],
	['edema', Edema],
	['review', Review],
];
