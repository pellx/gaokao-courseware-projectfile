import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Theory} from './Theory';
import {Types} from './Types';
import {Judge} from './Judge';
import {Organic} from './Organic';
import {BigPi} from './BigPi';
import {Angle1} from './Angle1';
import {Angle2} from './Angle2';
import {Template} from './Template';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['theory', Theory],
	['types', Types],
	['judge', Judge],
	['organic', Organic],
	['bigpi', BigPi],
	['angle1', Angle1],
	['angle2', Angle2],
	['template', Template],
	['review', Review],
];
