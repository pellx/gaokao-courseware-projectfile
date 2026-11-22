import React from 'react';
import type {T} from '../timeline';
import {Flower} from './Flower';
import {Gravity} from './Gravity';
import {Intro} from './Intro';
import {Lettuce} from './Lettuce';
import {Light} from './Light';
import {Review} from './Review';
import {Temp} from './Temp';
import {Whole} from './Whole';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['light', Light],
	['flower', Flower],
	['temp', Temp],
	['gravity', Gravity],
	['whole', Whole],
	['lettuce', Lettuce],
	['review', Review],
];
