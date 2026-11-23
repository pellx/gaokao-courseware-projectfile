import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Newton} from './Newton';
import {Orbit} from './Orbit';
import {First} from './First';
import {Launch} from './Launch';
import {Second} from './Second';
import {Geo} from './Geo';
import {Explore} from './Explore';
import {Equator} from './Equator';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['newton', Newton],
	['rule', Orbit],
	['first', First],
	['launch', Launch],
	['second', Second],
	['geo', Geo],
	['explore', Explore],
	['equator', Equator],
	['review', Review],
];
