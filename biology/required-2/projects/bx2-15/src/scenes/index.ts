import React from 'react';
import type {T} from '../timeline';
import {Enzyme} from './Enzyme';
import {Epi1} from './Epi1';
import {Epi2} from './Epi2';
import {Intro} from './Intro';
import {Relation} from './Relation';
import {Review} from './Review';
import {Selective} from './Selective';
import {Structure} from './Structure';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['enzyme', Enzyme],
	['structure', Structure],
	['selective', Selective],
	['epi1', Epi1],
	['epi2', Epi2],
	['relation', Relation],
	['review', Review],
];
