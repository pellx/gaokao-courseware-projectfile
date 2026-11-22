import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Type} from './Type';
import {Addmono} from './Addmono';
import {Condmono} from './Condmono';
import {Unit} from './Unit';
import {Material} from './Material';
import {Structure} from './Structure';
import {Function} from './Function';
import {Unknown} from './Unknown';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['type', Type],
	['addmono', Addmono],
	['condmono', Condmono],
	['unit', Unit],
	['material', Material],
	['structure', Structure],
	['function', Function],
	['unknown', Unknown],
	['review', Review],
];
