import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Cmp} from './Cmp';
import {Hcl} from './Hcl';
import {Identify} from './Identify';
import {Convert} from './Convert';
import {Hou} from './Hou';
import {Flame} from './Flame';
import {Graph} from './Graph';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['cmp', Cmp],
	['hcl', Hcl],
	['identify', Identify],
	['convert', Convert],
	['hou', Hou],
	['flame', Flame],
	['graph', Graph],
	['review', Review],
];
