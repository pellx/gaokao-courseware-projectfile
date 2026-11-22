import React from 'react';
import type {T} from '../timeline';
import {Blastocyst} from './Blastocyst';
import {Concept} from './Concept';
import {Develop} from './Develop';
import {Fertilize} from './Fertilize';
import {Intro} from './Intro';
import {Prepare} from './Prepare';
import {Review} from './Review';
import {Sign} from './Sign';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['prepare', Prepare],
	['fertilize', Fertilize],
	['sign', Sign],
	['develop', Develop],
	['blastocyst', Blastocyst],
	['review', Review],
];
