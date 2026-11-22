import React from 'react';
import type {T} from '../timeline';
import {Composition} from './Composition';
import {Curves} from './Curves';
import {Dominant} from './Dominant';
import {Intro} from './Intro';
import {Niche} from './Niche';
import {Relations} from './Relations';
import {Review} from './Review';
import {Season} from './Season';
import {Soil} from './Soil';
import {Spatial} from './Spatial';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['composition', Composition],
	['dominant', Dominant],
	['relations', Relations],
	['curves', Curves],
	['spatial', Spatial],
	['season', Season],
	['niche', Niche],
	['soil', Soil],
	['review', Review],
];
