import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Core} from './Core';
import {Atom} from './Atom';
import {Air} from './Air';
import {Water} from './Water';
import {Carbon} from './Carbon';
import {Desulfur} from './Desulfur';
import {Plastic} from './Plastic';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['core', Core],
	['atom', Atom],
	['air', Air],
	['water', Water],
	['carbon', Carbon],
	['desulfur', Desulfur],
	['plastic', Plastic],
	['review', Review],
];
