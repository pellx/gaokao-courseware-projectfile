import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Coord} from './Coord';
import {Parts} from './Parts';
import {Donor} from './Donor';
import {CuNh3} from './CuNh3';
import {FeScn} from './FeScn';
import {Equil} from './Equil';
import {Supra} from './Supra';
import {Novel} from './Novel';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['coord', Coord],
	['parts', Parts],
	['donor', Donor],
	['cunh3', CuNh3],
	['fescn', FeScn],
	['equil', Equil],
	['supra', Supra],
	['novel', Novel],
	['review', Review],
];
