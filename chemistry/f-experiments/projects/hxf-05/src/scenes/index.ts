import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Four} from './Four';
import {Iron} from './Iron';
import {Cation} from './Cation';
import {Anionone} from './Anionone';
import {Anionthree} from './Anionthree';
import {Gas} from './Gas';
import {Organic} from './Organic';
import {Order} from './Order';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['four', Four],
	['iron', Iron],
	['cation', Cation],
	['anion1', Anionone],
	['anion2', Anionthree],
	['gas', Gas],
	['organic', Organic],
	['order', Order],
	['review', Review],
];
