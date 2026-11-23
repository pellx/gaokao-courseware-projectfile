import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Theory} from './Theory';
import {KeplerOne} from './KeplerOne';
import {KeplerTwo} from './KeplerTwo';
import {KeplerThree} from './KeplerThree';
import {Approx} from './Approx';
import {Sun} from './Sun';
import {Moon} from './Moon';
import {Law} from './Law';
import {Constant} from './Constant';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['theory', Theory],
	['k1', KeplerOne],
	['k2', KeplerTwo],
	['k3', KeplerThree],
	['approx', Approx],
	['sun', Sun],
	['moon', Moon],
	['law', Law],
	['g', Constant],
	['review', Review],
];
