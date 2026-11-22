import React from 'react';
import type {T} from '../timeline';
import {Avery} from './Avery';
import {Early} from './Early';
import {ErrorScene} from './ErrorScene';
import {Griffith} from './Griffith';
import {Hershey} from './Hershey';
import {Intro} from './Intro';
import {Main} from './Main';
import {Phage} from './Phage';
import {Principle} from './Principle';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['early', Early],
	['griffith', Griffith],
	['avery', Avery],
	['principle', Principle],
	['phage', Phage],
	['hershey', Hershey],
	['error', ErrorScene],
	['main', Main],
	['review', Review],
];
