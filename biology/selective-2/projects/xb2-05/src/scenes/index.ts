import React from 'react';
import type {T} from '../timeline';
import {Adapt} from './Adapt';
import {Basis} from './Basis';
import {Intro} from './Intro';
import {Review} from './Review';
import {Desert, Forest, Grassland, Wetland} from './Types';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['basis', Basis],
	['desert', Desert],
	['grassland', Grassland],
	['forest', Forest],
	['wetland', Wetland],
	['adapt', Adapt],
	['review', Review],
];
