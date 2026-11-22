import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Feature} from './Feature';
import {Types} from './Types';
import {Valence} from './Valence';
import {Agent} from './Agent';
import {Double} from './Double';
import {Single} from './Single';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['feature', Feature],
	['types', Types],
	['valence', Valence],
	['agent', Agent],
	['double', Double],
	['single', Single],
	['review', Review],
];
