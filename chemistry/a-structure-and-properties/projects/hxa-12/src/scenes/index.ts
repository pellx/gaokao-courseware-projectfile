import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Polar} from './Polar';
import {Judge} from './Judge';
import {Acid} from './Acid';
import {Oxo} from './Oxo';
import {Chiral} from './Chiral';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['polar', Polar],
	['judge', Judge],
	['acid', Acid],
	['oxo', Oxo],
	['chiral', Chiral],
	['trap', Trap],
	['review', Review],
];
