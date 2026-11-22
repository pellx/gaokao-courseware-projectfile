import React from 'react';
import type {T} from '../timeline';
import {Centrifuge} from './Centrifuge';
import {Chloro} from './Chloro';
import {Er} from './Er';
import {Intro} from './Intro';
import {Lyso} from './Lyso';
import {Mito} from './Mito';
import {Nonmem} from './Nonmem';
import {Observe} from './Observe';
import {Review} from './Review';
import {Summary} from './Summary';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['centrifuge', Centrifuge],
	['mito', Mito],
	['chloro', Chloro],
	['er', Er],
	['lyso', Lyso],
	['nonmem', Nonmem],
	['summary', Summary],
	['observe', Observe],
	['review', Review],
];
