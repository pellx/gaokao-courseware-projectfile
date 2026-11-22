import React from 'react';
import type {T} from '../timeline';
import {AuxEth} from './AuxEth';
import {Gene} from './Gene';
import {Aba, Br, Ck, Eth, Ga} from './Hormones';
import {Intro} from './Intro';
import {Order} from './Order';
import {Ratio} from './Ratio';
import {Review} from './Review';
import {Syn} from './Syn';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['ga', Ga],
	['ck', Ck],
	['aba', Aba],
	['eth', Eth],
	['br', Br],
	['syn', Syn],
	['auxeth', AuxEth],
	['ratio', Ratio],
	['order', Order],
	['gene', Gene],
	['review', Review],
];
