import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Young} from './Young';
import {Coh} from './Coh';
import {Bright} from './Bright';
import {Gap} from './Gap';
import {Pat} from './Pat';
import {Color} from './Color';
import {Film} from './Film';
import {Use} from './Use';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['young', Young],
	['coh', Coh],
	['bright', Bright],
	['gap', Gap],
	['pat', Pat],
	['color', Color],
	['film', Film],
	['use', Use],
	['review', Review],
];
