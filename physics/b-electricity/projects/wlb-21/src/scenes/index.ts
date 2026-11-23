import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Build} from './Build';
import {Mutual} from './Mutual';
import {Ideal} from './Ideal';
import {Current} from './Current';
import {Loss} from './Loss';
import {LineLoss} from './LineLoss';
import {High} from './High';
import {Far} from './Far';
import {Grid} from './Grid';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['build', Build],
	['mutual', Mutual],
	['ideal', Ideal],
	['current', Current],
	['loss', Loss],
	['lineloss', LineLoss],
	['high', High],
	['far', Far],
	['grid', Grid],
	['review', Review],
];
