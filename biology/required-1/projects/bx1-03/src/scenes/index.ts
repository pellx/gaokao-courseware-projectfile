import React from 'react';
import type {T} from '../timeline';
import {Carbon} from './Carbon';
import {Compound} from './Compound';
import {Fat} from './Fat';
import {Intro} from './Intro';
import {Macro} from './Macro';
import {Protein} from './Protein';
import {Review} from './Review';
import {Sugar} from './Sugar';
import {Unity} from './Unity';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['unity', Unity],
	['macro', Macro],
	['carbon', Carbon],
	['compound', Compound],
	['sugar', Sugar],
	['fat', Fat],
	['protein', Protein],
	['review', Review],
];
