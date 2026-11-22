import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Kinds} from './Kinds';
import {Charging} from './Charging';
import {Induce} from './Induce';
import {Conserve} from './Conserve';
import {Elem} from './Elem';
import {Point} from './Point';
import {Coulomb} from './Coulomb';
import {Super} from './Super';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['kinds', Kinds],
	['charge', Charging],
	['induce', Induce],
	['conserve', Conserve],
	['elem', Elem],
	['point', Point],
	['coulomb', Coulomb],
	['super', Super],
	['review', Review],
];
