import React from 'react';
import type {T} from '../timeline';
import {Apply} from './Apply';
import {Beer} from './Beer';
import {Breeding} from './Breeding';
import {Concept} from './Concept';
import {Control} from './Control';
import {Intro} from './Intro';
import {Process} from './Process';
import {Review} from './Review';
import {Separate} from './Separate';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['process', Process],
	['breeding', Breeding],
	['control', Control],
	['separate', Separate],
	['beer', Beer],
	['apply', Apply],
	['review', Review],
];
