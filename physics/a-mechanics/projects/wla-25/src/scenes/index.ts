import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Origin} from './Origin';
import {Mom} from './Mom';
import {Dp} from './Dp';
import {Ek} from './Ek';
import {Imp} from './Imp';
import {Ft} from './Ft';
import {Thm} from './Thm';
import {Mean} from './Mean';
import {Cush} from './Cush';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['origin', Origin],
	['mom', Mom],
	['dp', Dp],
	['ek', Ek],
	['imp', Imp],
	['ft', Ft],
	['thm', Thm],
	['mean', Mean],
	['cush', Cush],
	['review', Review],
];
