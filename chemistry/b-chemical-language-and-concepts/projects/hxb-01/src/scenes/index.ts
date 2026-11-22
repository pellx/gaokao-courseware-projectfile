import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Method} from './Method';
import {Pure} from './Pure';
import {Oxide} from './Oxide';
import {Acid} from './Acid';
import {Salt} from './Salt';
import {Allo} from './Allo';
import {Judge} from './Judge';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['method', Method],
	['pure', Pure],
	['oxide', Oxide],
	['acid', Acid],
	['salt', Salt],
	['allo', Allo],
	['judge', Judge],
	['review', Review],
];
