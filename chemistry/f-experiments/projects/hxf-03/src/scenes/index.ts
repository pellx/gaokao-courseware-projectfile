import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Chlorine} from './Chlorine';
import {Ammonia} from './Ammonia';
import {Others} from './Others';
import {Order} from './Order';
import {Dryer} from './Dryer';
import {Collect} from './Collect';
import {Tail} from './Tail';
import {Connect} from './Connect';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['chlorine', Chlorine],
	['ammonia', Ammonia],
	['others', Others],
	['order', Order],
	['dryer', Dryer],
	['collect', Collect],
	['tail', Tail],
	['connect', Connect],
	['review', Review],
];
