import React from 'react';
import type {T} from '../timeline';
import {Essence} from './Essence';
import {Examples} from './Examples';
import {Fingerprint} from './Fingerprint';
import {Info} from './Info';
import {Intro} from './Intro';
import {Relation} from './Relation';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['examples', Examples],
	['essence', Essence],
	['info', Info],
	['relation', Relation],
	['fingerprint', Fingerprint],
	['review', Review],
];
