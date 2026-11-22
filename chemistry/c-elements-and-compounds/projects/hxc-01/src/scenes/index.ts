import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Phys} from './Phys';
import {Otwo} from './Otwo';
import {Water} from './Water';
import {Cmp} from './Cmp';
import {Nareact} from './Nareact';
import {Oxid} from './Oxid';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['phys', Phys],
	['o2', Otwo],
	['water', Water],
	['cmp', Cmp],
	['react', Nareact],
	['oxid', Oxid],
	['review', Review],
];
