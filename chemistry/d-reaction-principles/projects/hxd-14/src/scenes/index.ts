import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Cond} from './Cond';
import {Pole} from './Pole';
import {Move} from './Move';
import {Bridge} from './Bridge';
import {Write} from './Write';
import {Use} from './Use';
import {Design} from './Design';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['cond', Cond],
	['pole', Pole],
	['move', Move],
	['bridge', Bridge],
	['write', Write],
	['use', Use],
	['design', Design],
	['review', Review],
];
