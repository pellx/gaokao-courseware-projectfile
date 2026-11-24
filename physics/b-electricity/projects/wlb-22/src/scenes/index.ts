import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {What} from './What';
import {Convert} from './Convert';
import {Parts} from './Parts';
import {Ldr} from './Ldr';
import {Thermo} from './Thermo';
import {Strain} from './Strain';
import {Hall} from './Hall';
import {Use} from './Use';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['what', What],
	['convert', Convert],
	['parts', Parts],
	['ldr', Ldr],
	['thermo', Thermo],
	['strain', Strain],
	['hall', Hall],
	['use', Use],
	['review', Review],
];
