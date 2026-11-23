import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Pair} from './Pair';
import {Law3} from './Law3';
import {Exp} from './Exp';
import {Feat} from './Feat';
import {Univ} from './Univ';
import {Vs} from './Vs';
import {Order} from './Order';
import {Rule} from './Rule';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['pair', Pair],
	['law3', Law3],
	['exp', Exp],
	['feat', Feat],
	['univ', Univ],
	['vs', Vs],
	['order', Order],
	['rule', Rule],
	['review', Review],
];
