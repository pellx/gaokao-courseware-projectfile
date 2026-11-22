import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Cu} from './Cu';
import {Cuacid} from './Cuacid';
import {Cucoord} from './Cucoord';
import {Agppt} from './Agppt';
import {Agcoord} from './Agcoord';
import {Agredox} from './Agredox';
import {Method} from './Method';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['cu', Cu],
	['cuacid', Cuacid],
	['cucoord', Cucoord],
	['agppt', Agppt],
	['agcoord', Agcoord],
	['agredox', Agredox],
	['method', Method],
	['review', Review],
];
