import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Steps} from './Steps';
import {Distill} from './Distill';
import {Extract} from './Extract';
import {Recryst} from './Recryst';
import {Formula} from './Formula';
import {Ir} from './Ir';
import {Hnmr} from './Hnmr';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['steps', Steps],
	['distill', Distill],
	['extract', Extract],
	['recryst', Recryst],
	['formula', Formula],
	['ir', Ir],
	['hnmr', Hnmr],
	['review', Review],
];
