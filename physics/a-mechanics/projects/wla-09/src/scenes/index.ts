import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Equiv} from './Equiv';
import {Common} from './Common';
import {Para} from './Para';
import {Range} from './Range';
import {Resolve} from './Resolve';
import {Effect} from './Effect';
import {Ortho} from './Ortho';
import {Vector} from './Vector';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['equiv', Equiv],
	['common', Common],
	['para', Para],
	['range', Range],
	['resolve', Resolve],
	['effect', Effect],
	['ortho', Ortho],
	['vector', Vector],
	['review', Review],
];
