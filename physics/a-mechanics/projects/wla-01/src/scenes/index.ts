import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Method} from './Method';
import {Particle} from './Particle';
import {Frame} from './Frame';
import {Coord} from './Coord';
import {Time} from './Time';
import {Disp} from './Disp';
import {Vector} from './Vector';
import {Line} from './Line';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['method', Method],
	['particle', Particle],
	['frame', Frame],
	['coord', Coord],
	['time', Time],
	['disp', Disp],
	['vector', Vector],
	['line', Line],
	['review', Review],
];
