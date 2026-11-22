import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {System} from './System';
import {Period} from './Period';
import {Group} from './Group';
import {Block} from './Block';
import {Locate} from './Locate';
import {Diag} from './Diag';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['system', System],
	['period', Period],
	['group', Group],
	['block', Block],
	['locate', Locate],
	['diag', Diag],
	['trap', Trap],
	['review', Review],
];
