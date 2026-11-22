import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aufbau} from './Aufbau';
import {Pauli} from './Pauli';
import {Hund} from './Hund';
import {Lowest} from './Lowest';
import {Notation} from './Notation';
import {Ion} from './Ion';
import {Count} from './Count';
import {Norm} from './Norm';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aufbau', Aufbau],
	['pauli', Pauli],
	['hund', Hund],
	['lowest', Lowest],
	['notation', Notation],
	['ion', Ion],
	['count', Count],
	['norm', Norm],
	['review', Review],
];
