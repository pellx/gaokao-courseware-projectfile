import React from 'react';
import type {T} from '../timeline';
import {Bladder} from './Bladder';
import {Drug} from './Drug';
import {Food} from './Food';
import {Intro} from './Intro';
import {Mammary} from './Mammary';
import {Quality} from './Quality';
import {Resist} from './Resist';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['resist', Resist],
	['quality', Quality],
	['mammary', Mammary],
	['drug', Drug],
	['food', Food],
	['bladder', Bladder],
	['review', Review],
];
