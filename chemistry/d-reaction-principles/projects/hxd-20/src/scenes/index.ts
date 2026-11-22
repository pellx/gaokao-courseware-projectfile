import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Dilute} from './Dilute';
import {Conduct} from './Conduct';
import {Fraction} from './Fraction';
import {Log} from './Log';
import {Titration} from './Titration';
import {Water} from './Water';
import {Method} from './Method';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['dilute', Dilute],
	['conduct', Conduct],
	['fraction', Fraction],
	['log', Log],
	['titration', Titration],
	['water', Water],
	['method', Method],
	['review', Review],
];
