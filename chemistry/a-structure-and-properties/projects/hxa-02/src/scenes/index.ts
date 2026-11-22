import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Table} from './Table';
import {Znum} from './Znum';
import {Alkali} from './Alkali';
import {AlkPhys} from './AlkPhys';
import {Halogen} from './Halogen';
import {Displace} from './Displace';
import {Predict} from './Predict';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['table', Table],
	['znum', Znum],
	['alkali', Alkali],
	['alkphys', AlkPhys],
	['halogen', Halogen],
	['displace', Displace],
	['predict', Predict],
	['review', Review],
];
