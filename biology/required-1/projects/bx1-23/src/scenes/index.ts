import React from 'react';
import type {T} from '../timeline';
import {Amitosis} from './Amitosis';
import {Compare} from './Compare';
import {Graphs} from './Graphs';
import {Intro} from './Intro';
import {Meaning} from './Meaning';
import {Result} from './Result';
import {Review} from './Review';
import {Steps} from './Steps';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['compare', Compare],
	['meaning', Meaning],
	['amitosis', Amitosis],
	['steps', Steps],
	['result', Result],
	['graphs', Graphs],
	['review', Review],
];
