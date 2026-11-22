import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Phys} from './Phys';
import {Sodium} from './Sodium';
import {Elim} from './Elim';
import {Oxid} from './Oxid';
import {Other} from './Other';
import {Acid} from './Acid';
import {Bromine} from './Bromine';
import {Compare} from './Compare';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['phys', Phys],
	['na', Sodium],
	['elim', Elim],
	['oxid', Oxid],
	['other', Other],
	['acid', Acid],
	['bromine', Bromine],
	['compare', Compare],
	['review', Review],
];
