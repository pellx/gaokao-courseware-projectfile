import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Coord} from './Coord';
import {Infer} from './Infer';
import {Proj} from './Proj';
import {Voids} from './Voids';
import {Doping} from './Doping';
import {Novel} from './Novel';
import {Order} from './Order';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['coord', Coord],
	['infer', Infer],
	['proj', Proj],
	['voids', Voids],
	['doping', Doping],
	['novel', Novel],
	['order', Order],
	['review', Review],
];
