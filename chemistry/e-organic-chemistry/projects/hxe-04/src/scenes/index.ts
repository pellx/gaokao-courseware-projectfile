import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Four} from './Four';
import {Structural} from './Structural';
import {Cistrans} from './Cistrans';
import {Chiral} from './Chiral';
import {Mono} from './Mono';
import {Di} from './Di';
import {Fgiso} from './Fgiso';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['four', Four],
	['structural', Structural],
	['cistrans', Cistrans],
	['chiral', Chiral],
	['mono', Mono],
	['di', Di],
	['fgiso', Fgiso],
	['review', Review],
];
