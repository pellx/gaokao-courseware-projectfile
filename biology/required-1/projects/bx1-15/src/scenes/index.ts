import React from 'react';
import type {T} from '../timeline';
import {Efficient} from './Efficient';
import {Intro} from './Intro';
import {Mild} from './Mild';
import {Ph} from './Ph';
import {Phexp} from './Phexp';
import {Review} from './Review';
import {Specific} from './Specific';
import {Substrate} from './Substrate';
import {Temp} from './Temp';
import {Tempexp} from './Tempexp';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['efficient', Efficient],
	['specific', Specific],
	['mild', Mild],
	['temp', Temp],
	['ph', Ph],
	['tempexp', Tempexp],
	['phexp', Phexp],
	['substrate', Substrate],
	['review', Review],
];
