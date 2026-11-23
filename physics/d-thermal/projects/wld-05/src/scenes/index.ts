import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Crystal} from './Crystal';
import {Single} from './Single';
import {Struct} from './Struct';
import {Convert} from './Convert';
import {Material} from './Material';
import {Tension} from './Tension';
import {Wet} from './Wet';
import {Capillary} from './Capillary';
import {Lc} from './Lc';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['crystal', Crystal],
	['single', Single],
	['struct', Struct],
	['convert', Convert],
	['material', Material],
	['tension', Tension],
	['wet', Wet],
	['capillary', Capillary],
	['lc', Lc],
	['review', Review],
];
