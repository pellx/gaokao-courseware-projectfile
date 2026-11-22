import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Prep} from './Prep';
import {Setup} from './Setup';
import {Other} from './Other';
import {Cl} from './Cl';
import {Disinfect} from './Disinfect';
import {Clotwo} from './Clotwo';
import {Explore} from './Explore';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['prep', Prep],
	['setup', Setup],
	['other', Other],
	['cl', Cl],
	['84', Disinfect],
	['clo2', Clotwo],
	['explore', Explore],
	['review', Review],
];
