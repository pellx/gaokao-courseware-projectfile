import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Proj} from './Proj';
import {Flat} from './Flat';
import {Vel} from './Vel';
import {Disp} from './Disp';
import {Path} from './Path';
import {Time} from './Time';
import {Dv} from './Dv';
import {Oblique} from './Oblique';
import {Top} from './Top';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['proj', Proj],
	['flat', Flat],
	['vel', Vel],
	['disp', Disp],
	['path', Path],
	['time', Time],
	['dv', Dv],
	['oblique', Oblique],
	['top', Top],
	['review', Review],
];
