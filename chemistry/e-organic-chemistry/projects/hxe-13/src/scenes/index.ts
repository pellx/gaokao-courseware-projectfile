import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Subst} from './Subst';
import {Addelim} from './Addelim';
import {Redox} from './Redox';
import {Poly} from './Poly';
import {Condition} from './Condition';
import {Equation} from './Equation';
import {Naoh} from './Naoh';
import {Hbr} from './Hbr';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['subst', Subst],
	['addelim', Addelim],
	['redox', Redox],
	['poly', Poly],
	['condition', Condition],
	['equation', Equation],
	['naoh', Naoh],
	['h2br2', Hbr],
	['review', Review],
];
