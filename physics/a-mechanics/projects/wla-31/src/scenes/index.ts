import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Model} from './Model';
import {Force} from './Force';
import {Small} from './Small';
import {Net} from './Net';
import {History} from './History';
import {Period} from './Period';
import {Clock} from './Clock';
import {Energy} from './Energy';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['model', Model],
	['force', Force],
	['small', Small],
	['net', Net],
	['history', History],
	['period', Period],
	['clock', Clock],
	['energy', Energy],
	['review', Review],
];
