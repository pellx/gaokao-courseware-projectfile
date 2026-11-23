import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Gay} from './Gay';
import {Charles} from './Charles';
import {Lines} from './Lines';
import {Ideal} from './Ideal';
import {Model} from './Model';
import {State} from './State';
import {Micro} from './Micro';
import {Isobar} from './Isobar';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['gay', Gay],
	['charles', Charles],
	['lines', Lines],
	['ideal', Ideal],
	['model', Model],
	['state', State],
	['micro', Micro],
	['isobar', Isobar],
	['review', Review],
];
