import React from 'react';
import type {T} from '../timeline';
import {Balance} from './Balance';
import {Improve} from './Improve';
import {Intro} from './Intro';
import {Relation} from './Relation';
import {Review} from './Review';
import {SelfReg} from './SelfReg';
import {Tank} from './Tank';
import {Two} from './Two';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['balance', Balance],
	['selfreg', SelfReg],
	['two', Two],
	['relation', Relation],
	['improve', Improve],
	['tank', Tank],
	['review', Review],
];
