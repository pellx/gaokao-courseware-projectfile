import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Prepare} from './Prepare';
import {Kmno} from './Kmno';
import {Iodine} from './Iodine';
import {Relation} from './Relation';
import {Purity} from './Purity';
import {Error} from './Error';
import {Endpoint} from './Endpoint';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['prepare', Prepare],
	['kmno4', Kmno],
	['iodine', Iodine],
	['relation', Relation],
	['purity', Purity],
	['error', Error],
	['end', Endpoint],
	['review', Review],
];
