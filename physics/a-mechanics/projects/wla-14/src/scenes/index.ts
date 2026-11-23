import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Tangent} from './Tangent';
import {Cond} from './Cond';
import {Track} from './Track';
import {Speed} from './Speed';
import {Sub} from './Sub';
import {Compose} from './Compose';
import {Wax} from './Wax';
import {Judge} from './Judge';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['tangent', Tangent],
	['cond', Cond],
	['track', Track],
	['speed', Speed],
	['sub', Sub],
	['compose', Compose],
	['wax', Wax],
	['judge', Judge],
	['review', Review],
];
