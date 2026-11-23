import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Balance} from './Balance';
import {Inside} from './Inside';
import {Dist} from './Dist';
import {Tip} from './Tip';
import {Shield} from './Shield';
import {Adsorb} from './Adsorb';
import {Hazard} from './Hazard';
import {Zero} from './Zero';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['balance', Balance],
	['inside', Inside],
	['dist', Dist],
	['tip', Tip],
	['shield', Shield],
	['adsorb', Adsorb],
	['hazard', Hazard],
	['zero', Zero],
	['review', Review],
];
