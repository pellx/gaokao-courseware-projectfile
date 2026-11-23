import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Discover} from './Discover';
import {Cond} from './Cond';
import {Ways} from './Ways';
import {Exp} from './Exp';
import {Impact} from './Impact';
import {Lenz} from './Lenz';
import {Hinder} from './Hinder';
import {Energy} from './Energy';
import {Right} from './Right';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['discover', Discover],
	['cond', Cond],
	['ways', Ways],
	['exp', Exp],
	['impact', Impact],
	['lenz', Lenz],
	['hinder', Hinder],
	['energy', Energy],
	['right', Right],
	['review', Review],
];
