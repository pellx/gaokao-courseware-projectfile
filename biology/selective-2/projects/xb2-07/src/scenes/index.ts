import React from 'react';
import type {T} from '../timeline';
import {Chain} from './Chain';
import {Change} from './Change';
import {Concept} from './Concept';
import {Intro} from './Intro';
import {Links} from './Links';
import {Parts} from './Parts';
import {Review} from './Review';
import {Traps} from './Traps';
import {Web} from './Web';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['parts', Parts],
	['traps', Traps],
	['links', Links],
	['chain', Chain],
	['web', Web],
	['change', Change],
	['review', Review],
];
