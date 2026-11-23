import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Recoil} from './Recoil';
import {Mom} from './Mom';
import {Energy} from './Energy';
import {Blast} from './Blast';
import {Use} from './Use';
import {Rocket} from './Rocket';
import {Speed} from './Speed';
import {Hist} from './Hist';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['recoil', Recoil],
	['mom', Mom],
	['energy', Energy],
	['blast', Blast],
	['use', Use],
	['rocket', Rocket],
	['speed', Speed],
	['hist', Hist],
	['review', Review],
];
