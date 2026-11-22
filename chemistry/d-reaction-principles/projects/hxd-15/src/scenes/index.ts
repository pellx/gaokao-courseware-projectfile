import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Znmn} from './Znmn';
import {Lead} from './Lead';
import {Charge} from './Charge';
import {Fuel} from './Fuel';
import {Melt} from './Melt';
import {Lithium} from './Lithium';
import {Method} from './Method';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['znmn', Znmn],
	['lead', Lead],
	['charge', Charge],
	['fuel', Fuel],
	['melt', Melt],
	['li', Lithium],
	['method', Method],
	['review', Review],
];
