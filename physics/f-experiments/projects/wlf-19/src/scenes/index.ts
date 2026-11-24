import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Principle} from './Principle';
import {Tool} from './Tool';
import {Path} from './Path';
import {Note} from './Note';
import {Data} from './Data';
import {Circle} from './Circle';
import {Error} from './Error';
import {Law} from './Law';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['principle', Principle],
	['tool', Tool],
	['path', Path],
	['note', Note],
	['data', Data],
	['circle', Circle],
	['error', Error],
	['law', Law],
	['review', Review],
];
