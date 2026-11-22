import React from 'react';
import type {T} from '../timeline';
import {Concept} from './Concept';
import {Curve} from './Curve';
import {Egg} from './Egg';
import {Gametes} from './Gametes';
import {Homolog} from './Homolog';
import {Identify} from './Identify';
import {Intro} from './Intro';
import {Mi} from './Mi';
import {Mii} from './Mii';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['homolog', Homolog],
	['mi', Mi],
	['mii', Mii],
	['egg', Egg],
	['curve', Curve],
	['identify', Identify],
	['gametes', Gametes],
	['review', Review],
];
